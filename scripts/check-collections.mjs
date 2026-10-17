import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mantras } from '../data/mantras.mjs';
import { PDF_MANTRAS, PDF_URL } from '../data/pdf-mantras.mjs';
import { DEITIES, INTENTIONS, FESTIVALS, collectionFor } from '../data/collections.mjs';

assert.equal(new Set(mantras.map(m => m.slug)).size, mantras.length);
assert.equal(DEITIES.length, 8);
for (const deity of DEITIES) assert.ok(mantras.some(m => collectionFor(m).deityId === deity.id), `Empty deity: ${deity.id}`);
for (const intention of INTENTIONS) assert.ok(mantras.some(m => collectionFor(m).intentions.includes(intention.id)), `Empty intention: ${intention.id}`);
for (const m of mantras) {
  const meta = collectionFor(m);
  assert.ok(DEITIES.some(d => d.id === meta.deityId), `Unclassified: ${m.slug}`);
  assert.ok(meta.intentions.length);
  assert.ok(meta.intentions.every(id => INTENTIONS.some(i => i.id === id)));
  const lines = [...m.lines, ...(m.bonus?.lines || [])];
  for (const line of lines) for (const key of ['sa', 'en', 'hi', 'englishMeaning']) assert.ok(line[key]?.length, `${m.slug}: missing ${key}`);
  const html = readFileSync(`site/${m.slug}/index.html`, 'utf8');
  assert.equal(html.split('class="line-meaning"').length - 1, lines.length * 3);
  assert.ok(!html.includes('/null_') && !html.includes('undefined'));
}
for (const entry of PDF_MANTRAS) {
  assert.ok(entry.page >= 1 && entry.page <= 28);
  const m = mantras.find(m => m.slug === entry.slug);
  assert.equal(m.sourceUrl, `${PDF_URL}#page=${entry.page}`);
  assert.equal(m.lines.length, entry.lines.length);
}
let month = 0;
for (const festival of FESTIVALS) {
  assert.ok(festival.month >= month && festival.month <= 12, `Out of order: ${festival.id}`);
  assert.ok(festival.deities.every(id => DEITIES.some(d => d.id === id)));
  assert.ok(mantras.some(m => festival.deities.includes(collectionFor(m).deityId)), `Empty festival: ${festival.id}`);
  month = festival.month;
}
const home = readFileSync('site/index.html', 'utf8');
assert.ok(!home.includes('coming soon'));
assert.equal(home.split('class="collection-tile"').length - 1, DEITIES.length + FESTIVALS.length + INTENTIONS.length);
assert.ok(!home.includes('featured-mantras'), 'Duplicate deity gallery');
for (const deity of DEITIES) assert.ok(home.includes(`id="deity-${deity.id}"`));
let lastFestivalPosition = -1;
for (const festival of FESTIVALS) {
  const position = home.indexOf(`id="festival-${festival.id}"`);
  assert.ok(position > lastFestivalPosition, 'Festival cards out of order');
  lastFestivalPosition = position;
}
console.log(`PASS: ${mantras.length} prayers; ${PDF_MANTRAS.length} PDF additions; all 8 deity and ${INTENTIONS.length} intention collections populated; ${FESTIVALS.length} chronological festival groups; per-line meanings and source-page references.`);
