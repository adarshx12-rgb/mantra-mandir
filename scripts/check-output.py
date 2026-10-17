"""Validate generated pages and delivery assets without a browser."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json

root = Path('site').resolve()
class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.controls, self.headings = [], [], [], 0
        self.structured, self.capture = [], None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'h1': self.headings += 1
        for key in ('href', 'src', 'srcset'):
            if key in a: self.refs.append(a[key])
        if 'aria-controls' in a: self.controls.extend(a['aria-controls'].split())
        if tag == 'script' and a.get('type') == 'application/ld+json': self.capture = ''
    def handle_data(self, text):
        if self.capture is not None: self.capture += text
    def handle_endtag(self, tag):
        if tag == 'script' and self.capture is not None:
            self.structured.append(json.loads(self.capture))
            self.capture = None

pages = {}
for path in root.rglob('*.html'):
    page = Page()
    content = path.read_text(encoding='utf-8')
    assert '\ufffd' not in content, f'Invalid Unicode: {path}'
    page.feed(content)
    assert page.headings == 1, f'Expected one h1: {path}'
    assert len(page.ids) == len(set(page.ids)), f'Duplicate IDs: {path}'
    assert all(control in page.ids for control in page.controls), f'Missing tab panel: {path}'
    pages[path] = page

for path, page in pages.items():
    for ref in page.refs:
        parsed = urlsplit(ref)
        if parsed.scheme or parsed.netloc: continue
        target = ((root / parsed.path.lstrip('/')) if parsed.path.startswith('/') else (path.parent / parsed.path)).resolve() if parsed.path else path
        if target.is_dir(): target /= 'index.html'
        assert target.exists(), f'Broken link or asset: {path}: {ref}'
        if parsed.fragment and target in pages:
            assert unquote(parsed.fragment) in pages[target].ids, f'Broken anchor: {path}: {ref}'
    if path.name == 'index.html': assert page.structured, f'Missing structured data: {path}'

art = list((root / 'art').glob('*.webp'))
assert len(art) == 10
assert all(p.stat().st_size <= 80000 for p in art)
assert len(pages) == 6
print('PASS: six HTML documents, internal links and anchors, image/script/style paths, tab references, unique IDs, one h1 per page, structured data, UTF-8, ten artwork assets under 80 KB each.')
