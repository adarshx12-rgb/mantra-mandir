"""Create delivery-size WebP copies; never modify owner-supplied originals."""
from pathlib import Path
from io import BytesIO
from PIL import Image, ImageOps
import sys

BUDGET = 80000
MIN_QUALITY = 40
out = Path('assets/art')
out.mkdir(parents=True, exist_ok=True)

def encode(im):
    """Best quality (>= MIN_QUALITY) that fits the budget, or None."""
    for quality in range(84, MIN_QUALITY - 1, -4):
        buf = BytesIO()
        im.save(buf, format='WEBP', quality=quality, method=6)
        if buf.tell() <= BUDGET:
            return buf, quality
    return None

for deity in (sys.argv[1:] or ('ganesha', 'gayatri', 'shiv', 'krishna', 'saraswati', 'durga', 'laxmi', 'hanuman', 'kali', 'ayyappa', 'murugan', 'vishnu', 'rama', 'annapurna')):
    variants = [('web', (1600, 1000)), ('mob', (760, 1344))]
    if deity in ('shiv', 'krishna'):
        variants.append(('mob2', (760, 1344)))
    for variant, bounds in variants:
        source = Path('images') / f'{deity}_{variant}.png'
        original = Image.open(source).convert('RGB')
        # Highly detailed paintings shrink a little rather than drop below MIN_QUALITY.
        scale, result = 1.0, None
        while result is None and scale >= 0.6:
            im = ImageOps.contain(original, (int(bounds[0] * scale), int(bounds[1] * scale)), Image.LANCZOS)
            result = encode(im)
            scale -= 0.05
        if result is None:
            raise RuntimeError(f'{source} exceeds the image budget')
        buf, quality = result
        target = out / f'{deity}_{variant}.webp'
        target.write_bytes(buf.getvalue())
        print(f'{target}: {im.width}x{im.height}, {buf.tell():,} bytes, quality {quality}')
