import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import { mantras } from '../data/mantras.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.argv[2] || 'playwright');
mkdirSync('output/review', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const base = 'http://127.0.0.1:8123';
try {
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['', ...mantras.map(m => m.slug + '/')]) {
      await page.goto(`${base}/${path}`);
      // Lazy images never decode while offscreen, so load them eagerly before waiting.
      await page.locator('img').evaluateAll(imgs => Promise.all(imgs.map(img => { img.loading = 'eager'; return img.decode(); })));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}: overflow on ${path}`);
      if (await page.locator('.hero-art img').count()) {
        const art = await page.locator('.hero-art img').evaluate(img => img.currentSrc);
        assert.ok(art.endsWith(width <= 640 ? '_mob.webp' : '_web.webp'), art);
      } else assert.equal(await page.locator('.hero-art.symbolic-art').count(), 1);
      if (width !== 320) await page.screenshot({ path: `output/review/${path.split('/')[0] || 'home'}-${width}.png`, fullPage: true });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.locator('#browse-festivals').click();
  assert.equal(await page.locator('#collection-festivals').isVisible(), true);
  assert.equal(await page.locator('#collection-deities').isVisible(), false);
  await page.locator('#browse-festivals').focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#collection-intentions').isVisible(), true);
  await page.goto(`${base}/#deity-hanuman`);
  assert.equal(await page.locator('#deity-hanuman').isVisible(), true);
  assert.equal(await page.locator('#deity-hanuman').getAttribute('open'), '');
  await page.locator('#deity-shiva > summary').click();
  await page.waitForTimeout(100);
  assert.equal(await page.locator('#deity-hanuman').getAttribute('open'), null);
  assert.equal(await page.locator('#deity-shiva .collection-links a').count(), 3);
  await page.goto(`${base}/gayatri-mantra/`);
  await page.getByRole('tab', { name: 'Transliteration' }).click();
  await page.reload();
  assert.equal(await page.locator('#tab-en').getAttribute('aria-selected'), 'true');
  await page.locator('#tab-en').focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#tab-hi').getAttribute('aria-selected'), 'true');
  await page.locator('#chant').click();
  await page.reload();
  assert.equal(await page.locator('#count').textContent(), '1');
  await page.goto(base);
  assert.match(await page.locator('#cont').textContent(), /1 of 108 chants saved/);
  await page.locator('#cont').click();
  await page.evaluate(() => {
    const state = JSON.parse(localStorage.getItem('mm1'));
    state.counts['gayatri-mantra'] = 107;
    localStorage.setItem('mm1', JSON.stringify(state));
  });
  await page.reload();
  await page.locator('#chant').click();
  assert.equal(await page.locator('#count').textContent(), '108');
  await page.locator('#chant').click();
  await page.waitForTimeout(2800);
  assert.equal(await page.locator('#count').textContent(), '1');
  assert.match(await page.locator('#malas').textContent(), /1 mala completed/);
  await page.locator('#reset').click();
  assert.equal(await page.locator('#count').textContent(), '0');
  await page.goto(`${base}/saraswati-mantra/`);
  for (const lang of ['sa', 'en', 'hi']) {
    await page.locator(`#tab-${lang}`).click();
    assert.equal(await page.locator(`#verse-${lang}`).isVisible(), true);
    assert.equal(await page.locator(`#bonus-${lang}`).isVisible(), true);
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJS.newPage();
  await staticPage.goto(`${base}/gayatri-mantra/`);
  assert.equal(await staticPage.locator('.pane:visible').count(), 3);
  await noJS.close();
  assert.deepEqual(errors, []);
  console.log(`PASS: all ${mantras.length + 1} pages at 1440, 390 and 320px; responsive artwork; collection navigation; tabs and keyboard; saved language; count, resume, 108 completion, reset; no-JS verses; no browser errors.`);
} finally {
  await browser.close();
}
