// Static site generator: `node build.mjs` writes ./site. No dependencies.
// Set SITE_URL for production, e.g. SITE_URL=https://yourdomain.com node build.mjs
import { mkdirSync, writeFileSync, copyFileSync, existsSync, readdirSync, rmSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { SITE, mantras } from './data/mantras.mjs';
import { SEO_CONTENT } from './data/seo.mjs';
import { HOME_FAQS } from './data/home-faqs.mjs';
import { INFO_PAGES, CONTACT } from './data/pages.mjs';
import { DEITIES, INTENTIONS, FESTIVALS, collectionFor, festivalMantras } from './data/collections.mjs';

const OUT = 'site';
const assetVersion = (path) => createHash('sha256').update(readFileSync(path)).digest('hex').slice(0, 12);
const CSS_VERSION = assetVersion('src/style.css');
const JS_VERSION = assetVersion('src/app.js');
// Quick links under the home hero button: the four target SEO keywords.
const HERO_TAGS = ['gayatri-mantra', 'mahamrityunjay-mantra', 'om-krishnaya-vasudevaya-haraye-paramatmane-mantra', 'saraswati-mantra'];
const FAVICON = `data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#1f1646'/><text x='32' y='46' font-size='40' text-anchor='middle' fill='#ffb23e'>ॐ</text></svg>")}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const themeVars = (t) => `--bg:${t.bg};--bg2:${t.bg2};--accent:${t.accent};--accent2:${t.accent2};--text:${t.text};--glow:${t.glow}`;
const LANGS = [['sa', 'संस्कृत'], ['en', 'Transliteration'], ['hi', 'Hinglish']];
const MEANING_LABEL = { sa: 'अर्थ', en: 'Meaning', hi: 'Meaning (Hinglish)' };

// Google Analytics 4 (owner-supplied measurement ID). Loads only on the production
// host, so pages.dev previews and local servers are not counted, and only after the
// visitor accepts the cookie banner (mmconsent in localStorage; see src/app.js).
const GA_ID = 'G-RL972RLFVJ';
const analytics = `<!-- Google tag (gtag.js), production host and consent only -->
<script>
  window.mmAnalytics = function () {
    if (location.hostname !== '${new URL(SITE.url).hostname}' || window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
    document.head.appendChild(ga);
  };
  try { if (localStorage.getItem('mmconsent') === 'granted') mmAnalytics(); } catch (e) {}
</script>`;

const head = ({ title, desc, path, depth, img, imgAlt = 'Mantra Mandir devotional artwork', type = 'website', extra = '' }) => {
  const up = '../'.repeat(depth);
  const url = `${SITE.url}/${path}`;
  return `<!doctype html>
<html lang="en"><head>
${analytics}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0c0a1c">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
${img ? `<meta property="og:image" content="${SITE.url}/art/${img}_web.webp">
<meta property="og:image:type" content="image/webp">
<meta property="og:image:alt" content="${esc(imgAlt)}">` : ''}
<meta name="twitter:card" content="${img ? 'summary_large_image' : 'summary'}">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
${img ? `<meta name="twitter:image" content="${SITE.url}/art/${img}_web.webp">
<meta name="twitter:image:alt" content="${esc(imgAlt)}">` : ''}
<link rel="icon" href="${FAVICON}">
<link rel="stylesheet" href="${up}css/style.css?v=${CSS_VERSION}">
<script>document.documentElement.classList.add('js')</script>
${extra}</head>`;
};

const header = (up) => `<a class="skip" href="#main">Skip to content</a><header class="top"><a class="logo" href="${up || './'}"><b aria-hidden="true">ॐ</b>${SITE.name}</a><nav aria-label="Main navigation"><a href="${up || './'}#mantras">All mantras</a><details class="site-menu"><summary>About</summary><div class="site-menu-links">${INFO_PAGES.map(p => `<a href="${up}${p.slug}/">${esc(p.title)}</a>`).join('')}</div></details><span class="chip" id="streak" hidden></span></nav></header>`;
const footer = (up) => `<footer><a class="logo" href="${up || './'}"><b aria-hidden="true">ॐ</b>${SITE.name}</a><p>A quiet space for daily practice.</p><nav aria-label="Deity collections">${DEITIES.map((d) => `<a href="${up || './'}#deity-${d.id}">${d.name}</a>`).join('')}</nav><nav aria-label="About this website">${INFO_PAGES.map(p => `<a href="${up}${p.slug}/">${esc(p.title)}</a>`).join('')}</nav><p class="small">Your chant progress stays on this device. <button type="button" class="cookie-settings" data-consent-open>Cookie settings</button></p></footer><div class="consent" id="consent" role="region" aria-label="Cookie consent" hidden><p>We use Google Analytics cookies to learn which pages help visitors. They are set only if you accept. <a href="${up}cookie-policy/">Cookie Policy</a></p><div class="consent-actions"><button type="button" class="btn sm" data-consent="granted">Accept</button><button type="button" class="btn sm ghost" data-consent="denied">Decline</button></div></div><div class="toast" id="toast" role="status" aria-live="polite"></div><script src="${up}js/app.js?v=${JS_VERSION}" defer></script>`;

const artwork = (art, alt, up = '', hero = false) => art ? `<picture${hero ? ' class="hero-art"' : ''}><source media="(max-width: 640px)" srcset="${up}art/${art}_mob.webp"><img src="${up}art/${art}_web.webp" alt="${esc(alt)}" width="1600" height="905" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>` : `<div class="symbolic-art${hero ? ' hero-art' : ''}" aria-hidden="true"><span>ॐ</span></div>`;

const card = (m, up) => `<a class="mc" href="${up}${m.slug}/" data-slug="${m.slug}" style="--ac:${m.theme.accent};${themeVars(m.theme)}">${m.art ? `<img src="${up}art/${m.art}_mob.webp" alt="${esc(m.imgAlt)}" width="760" height="1344" loading="lazy" decoding="async">` : artwork(null, '', up)}<div class="t"><span>${m.deity}</span><h3>${m.short}</h3><span class="card-action">Read mantra <span aria-hidden="true">↗</span></span></div></a>`;

const collectionLinks = (items) => items.length ? `<ul class="collection-links">${items.map(m => `<li><a href="${m.slug}/"><span>${m.short}</span><span class="small">${esc(m.purpose)}</span><span aria-hidden="true">↗</span></a></li>`).join('')}</ul>` : '<p class="collection-empty">Mantras for this collection are coming soon.</p>';

function collectionBrowser() {
  const views = [['deities', 'By deity'], ['festivals', 'By festival'], ['intentions', 'By intention']];
  const tile = (id, title, subtitle, items, preferredDeity, imageOverride) => {
    const m = items.find(m => collectionFor(m).deityId === preferredDeity) || items.find(m => m.art) || items[0];
    const image = imageOverride || (m.art ? `${m.art}_mob` : null);
    const count = `${items.length} ${items.length === 1 ? 'prayer' : 'prayers'}`;
    return `<details class="collection-tile" id="${id}" data-meta="${esc(subtitle ? `${subtitle} · ${count}` : count)}" style="--ac:${m.theme.accent};${themeVars(m.theme)}"><summary class="mc">${image ? `<img src="art/${image}.webp" alt="" width="760" height="1344" loading="lazy" decoding="async">` : artwork(null, '')}<div class="t"><span>${esc(subtitle || count)}</span><h3>${esc(title)}</h3><span class="card-action">${subtitle ? count : 'View prayers'}<span aria-hidden="true">+</span></span></div></summary><div class="collection-tile-links">${collectionLinks(items)}</div></details>`;
  };
  const intentionArt = { strength: 'shiva', learning: 'saraswati', peace: 'shiva', devotion: 'krishna', beginnings: 'ganesh', prosperity: 'lakshmi', nourishment: 'annapurna', wellbeing: 'vishnu', confidence: 'hanuman', exams: 'vishnu', protection: 'shiva', sleep: 'rama', marriage: 'krishna' };
  return `<section class="collection-browser" id="collections" aria-labelledby="collections-title">
<div class="section-heading"><div><h2 id="collections-title">Find a mantra</h2><p>Follow your devotion, an occasion, or an intention.</p></div></div>
<div class="browse-tabs" role="tablist" aria-label="Browse mantras">${views.map(([id, label], i) => `<button type="button" role="tab" id="browse-${id}" aria-controls="collection-${id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-browse="${id}">${label}</button>`).join('')}</div>
<div class="collection-panel on" id="collection-deities" role="tabpanel" aria-labelledby="browse-deities" tabindex="0">
<div class="collection-grid">${DEITIES.map(d => tile(`deity-${d.id}`, d.name, '', mantras.filter(m => collectionFor(m).deityId === d.id), d.id)).join('')}</div>
</div>
<div class="collection-panel" id="collection-festivals" role="tabpanel" aria-labelledby="browse-festivals" tabindex="0">
<p class="collection-note">January to December. Months are approximate; lunar dates and regional observances vary.</p>
<ol class="collection-grid festival-grid">${[...FESTIVALS].sort((a,b) => a.month-b.month).map(f => `<li>${tile(`festival-${f.id}`, f.name, f.season, festivalMantras(f, mantras), f.deities[0], ({ 'maha-shivaratri': 'shiv_mob2', holi: 'krishna_mob2' })[f.id])}</li>`).join('')}</ol>
<p class="source-note">Calendar references: <a href="https://panchangdaily.com/festivals/">festival month guide</a>, <a href="https://www.drikpanchang.com/calendars/hindu/hinducalendar.html">Drik Panchang</a>, and <a href="https://kurukshetra.gov.in/jyotisarevents/">Gita Jayanti in Kurukshetra</a>. Check your local panchang for this year’s dates.</p>
</div>
<div class="collection-panel" id="collection-intentions" role="tabpanel" aria-labelledby="browse-intentions" tabindex="0">
<p class="collection-note">Choose an intention for your practice.</p>
<div class="collection-grid">${INTENTIONS.map(i => tile(`intention-${i.id}`, i.name, '', mantras.filter(m => collectionFor(m).intentions.includes(i.id)), intentionArt[i.id], i.id === 'strength' ? 'shiv_mob2' : null)).join('')}</div>
</div>
<dialog class="collection-dialog" id="collection-dialog" aria-labelledby="collection-dialog-title"><div class="cd-inner"><div class="cd-banner"><span class="small" id="collection-dialog-meta"></span><h3 id="collection-dialog-title"></h3><button type="button" class="cd-close" aria-label="Close">×</button></div><div class="cd-body collection-tile-links"></div></div></dialog>
</section>`;
}

const panes = (lines, meaning, prefix = 'verse') => LANGS.map(([k]) => `<div class="pane" id="${prefix}-${k}" role="tabpanel" aria-labelledby="tab-${k}" tabindex="0" data-lang="${k}"><div class="verse">${lines.map((l) => `<div class="verse-row"><p${k === 'sa' ? ' lang="sa"' : ''}>${l[k]}</p><span class="line-meaning" lang="en">${esc(l.englishMeaning)}</span></div>`).join('')}</div><div class="meaning"><h3>${MEANING_LABEL[k]}</h3><p${k === 'sa' ? ' lang="hi"' : ''}>${meaning[k]}</p></div></div>`).join('');

function mantraPage(m) {
  const up = '../';
  const seo = SEO_CONTENT[m.slug];
  if (seo?.title || seo?.desc) m = { ...m, title: seo.title || m.title, desc: seo.desc || m.desc };
  const next = [...mantras.filter(x => x.slug !== m.slug && collectionFor(x).deityId === collectionFor(m).deityId), ...mantras.filter(x => collectionFor(x).deityId !== collectionFor(m).deityId)].slice(0, 3);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: m.title, description: m.desc, ...(m.art ? { image: `${SITE.url}/art/${m.art}_web.webp` } : {}), inLanguage: ['en', 'hi', 'sa'], mainEntityOfPage: `${SITE.url}/${m.slug}/` },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: m.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' }, { '@type': 'ListItem', position: 2, name: m.short, item: `${SITE.url}/${m.slug}/` }] },
  ];
  return `${head({ title: m.title, desc: m.desc, path: `${m.slug}/`, depth: 1, img: m.art, imgAlt: m.imgAlt, type: 'article', extra: `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` })}
<body style="${themeVars(m.theme)}" data-slug="${m.slug}" data-name="${esc(m.short)}">
${header(up)}
<div class="mobile-counter" id="mobile-counter" role="region" aria-label="Floating chant counter" hidden>
<div class="counter-toolbar"><button type="button" class="counter-drag" id="counter-drag" aria-label="Move counter; drag or use arrow keys">Drag to move</button><button type="button" class="counter-close" id="counter-close" aria-label="Close chant counter">&times;</button></div>
<div class="mobile-count" role="status" aria-live="polite" aria-atomic="true"><span id="mobile-count">0</span><span class="small" id="mobile-count-label"> of 108 chants</span></div>
<button type="button" class="btn" id="mobile-chant">Count a chant</button>
</div>
<main id="main">
<section class="hero mantra-hero">
${artwork(m.art, m.imgAlt, up, true)}
<div class="mantra-stage">
<div class="hero-in"><a class="back" href="../#mantras">‹ All mantras</a><p class="deity">${m.deity}</p><h1>${m.h1 || m.displayTitle || m.short}</h1><p class="tag">${m.tagline}</p><a class="btn" href="#chant-card">Begin chanting</a><button type="button" class="btn ghost counter-open" id="counter-open" aria-controls="mobile-counter" aria-expanded="false">Chant counter</button><a class="text-link" href="#about">Meaning &amp; tradition</a></div>

<div class="practice">
<div class="reading">

<section id="chant-card">
${seo ? `<h2 class="reading-title">${esc(seo.readingHeading)}</h2>` : ''}
<div class="tabs" role="tablist" aria-label="Choose script">${LANGS.map(([k, n]) => `<button class="tab" id="tab-${k}" role="tab" data-lang="${k}" aria-controls="verse-${k}${m.bonus ? ` bonus-${k}` : ''}" aria-selected="false">${n}</button>`).join('')}</div>
${panes(m.lines, m.meaning)}
${m.bonus ? `<div class="bonus"><h3>${m.bonus.label}</h3>${panes(m.bonus.lines, m.bonus.meaning, 'bonus')}<p class="source-note">A short invocation containing Saraswati’s seed syllable, aiṃ. <a href="${m.bonus.sourceUrl}" target="_blank" rel="noopener noreferrer">View source</a>.</p></div>` : ''}
<p class="source-note">${m.sourceNote}${m.sourceUrl ? ` <a href="${m.sourceUrl}" target="_blank" rel="noopener noreferrer">View source</a>.` : ''}</p>
${m.additionalSource ? `<p class="source-note">${m.additionalSource.note} <a href="${m.additionalSource.url}" target="_blank" rel="noopener noreferrer">View PDF page</a>.</p>` : ''}
</section>
</div>
<section class="mala" aria-label="Chant counter">
<h2>Your daily mala</h2>
<p class="small">One chant, one bead.</p>
<div class="ring"><svg viewBox="0 0 240 240" id="dots" aria-hidden="true"></svg><div class="mid"><span class="num" id="count">0</span><span class="small">of 108</span></div></div>
<p class="small" id="malas"></p>
<p class="done" id="done" aria-live="polite"></p>
<button class="btn" id="chant">Count a chant</button>
<p style="margin:14px 0 0"><button class="toggle" id="reset">Reset count</button></p>
<p class="save-note small">Saved on this device. Return whenever you’re ready.</p>
</section>
</div>
</div>
</section>
<div class="information-scene">
<div class="information-art" aria-hidden="true">${artwork(m.art, '', up)}</div>
<div class="wrap information">
<section id="about"><h2>${seo?.aboutHeading ? esc(seo.aboutHeading) : `About the ${m.short}`}</h2><p>${m.intro}</p>
<p class="small"><b>Best time to chant:</b> ${m.bestTime}</p>
<p><a class="btn ghost sm" id="wa" href="https://wa.me/?text=${encodeURIComponent(`${m.short} – ${SITE.url}/${m.slug}/`)}">Share on WhatsApp</a></p></section>
${seo ? `<section class="reading-explanation"><h2>${esc(seo.heading)}</h2><p>${esc(seo.text)}</p>${seo.hindi ? `<p lang="hi">${esc(m.meaning.sa)}</p>` : ''}<p><a href="#chant-card">Return to the verse and counter</a></p></section>` : ''}

<section><h2>${m.page ? 'In your practice' : `Benefits of the ${m.short}`}</h2><ul class="ticks">${m.benefits.map((b) => `<li>${b}</li>`).join('')}</ul></section>
<section><h2>How to chant the ${m.short}</h2>${m.practiceSource ? `<p class="source-note">Practice directions adapted from Infallible Vedic Remedies. ${esc(m.practiceSource)}</p>` : ''}<ol class="steps">${m.howTo.map((b) => `<li>${esc(b)}</li>`).join('')}</ol></section>
${m.practiceNotes?.length ? `<section id="practice-notes"><h2>Extra notes for your practice</h2><ul class="ticks">${m.practiceNotes.map(note => `<li>${esc(note)}</li>`).join('')}</ul></section>` : ''}
<section><h2>Frequently asked questions</h2>${m.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>
<section class="related"><h2>Continue your practice</h2><ul class="related-links">${next.map((x) => `<li><a href="${up}${x.slug}/">${esc(x.short)}</a><span>${esc(x.cardLine)}</span></li>`).join('')}</ul></section>
</div>
</div>
</main>
${footer(up)}
</body></html>`;
}

function homePage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: HOME_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  const ld = [faqSchema, { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url + '/', description: SITE.tagline, inLanguage: ['en', 'hi', 'sa'] },
    { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: mantras.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.short, url: `${SITE.url}/${m.slug}/` })) }];
  return `${head({ title: `Hindu Mantras & 108 Mantra Counter | ${SITE.name}`, desc: `Read Gayatri Mantra, Mahamrityunjay Mantra, Krishna and Saraswati prayers with meanings. Use a free 108 mantra counter and save your practice on this device.`, path: '', depth: 0, img: 'ganesha', imgAlt: 'Lord Ganesha in devotional artwork', extra: `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n` })}
<body class="home">
${header('')}
<main id="main">
<section class="hero">
${artwork('ganesha', 'Lord Ganesha seated in warm golden light beside a lotus pond', '', true)}
<div class="hero-in"><p class="greet" id="greet">Namaste</p>
<h1>Hindu mantras for<br>daily practice.</h1>
<p class="tag">Mantras for your daily practice.<br>Read the words, understand their meaning,<br>and take one chant at a time.</p>
<a class="btn" href="#mantras">Explore the mantras</a>
<nav class="hero-tags" aria-label="Popular mantras">${HERO_TAGS.map((slug) => mantras.find((m) => m.slug === slug)).map((m) => `<a href="${m.slug}/">${m.h1 || m.short}</a>`).join('')}</nav></div>
</section>

<div class="wrap wide">
<div class="card cont" id="cont" hidden><a class="resume-link" id="resume-link" href="#"><div><span class="small">Continue where you left off</span><br><b>Gayatri Mantra</b><br><span class="small" id="resume-count"></span></div><span class="btn sm">Continue</span></a><button type="button" class="clear-practice" id="clear-practice" aria-label="Clear saved count and malas for this prayer" title="Clear saved count and malas for this prayer">&times;</button></div>
<div id="mantras">${collectionBrowser()}</div>

${readFileSync('src/home-guide.html', 'utf8')}
<section class="home-faq" aria-labelledby="home-faq-title"><h2 id="home-faq-title">Frequently asked questions</h2>${HOME_FAQS.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>
</div>
</main>
${footer('')}
</body></html>`;
}

function infoPage(page) {
  const url = `${SITE.url}/${page.slug}/`;
  const ld = { '@context': 'https://schema.org', '@type': page.type, name: page.title, description: page.desc, url, isPartOf: { '@type': 'WebSite', name: SITE.name, url: `${SITE.url}/` } };
  return `${head({ title: `${page.title} | ${SITE.name}`, desc: page.desc, path: `${page.slug}/`, depth: 1, img: 'ganesha', imgAlt: 'Lord Ganesha in devotional artwork', extra: `<script type="application/ld+json">${JSON.stringify(ld)}</script>` })}
<body>${header('../')}<main id="main" class="wrap info-page"><a href="../">Home</a><h1>${esc(page.title)}</h1><p class="small">Last updated: 19 October 2026</p>
${page.sections.map(([title, body]) => `<section><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join('')}
${page.slug === 'contact-us' ? `<p class="contact-address">${CONTACT.active ? `<a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a>` : `${esc(CONTACT.email)} <span class="small">— not yet active</span>`}</p>` : '<p><a href="../contact-us/">Contact Us</a></p>'}
</main>${footer('../')}</body></html>`;
}

function errorPage(code, title, description) {
  return `${head({ title: `${code} — ${title} | ${SITE.name}`, desc: description, path: `${code}.html`, depth: 0, extra: '<meta name="robots" content="noindex">' }).replace('href="css/', 'href="/css/')}
<body>${header('/')}<main id="main" class="wrap info-page error-page"><p class="deity">${code}</p><h1>${title}</h1><p>${description}</p><p><a class="btn" href="/">Back to home</a></p><p><a href="/contact-us/">Contact Us</a></p></main>${footer('/')}</body></html>`;
}

const write = (p, c) => { mkdirSync(p.split('/').slice(0, -1).join('/') || '.', { recursive: true }); writeFileSync(p, c); };
mkdirSync(`${OUT}/css`, { recursive: true }); mkdirSync(`${OUT}/js`, { recursive: true });
mkdirSync(`${OUT}/img`, { recursive: true });
mkdirSync(`${OUT}/art`, { recursive: true });
for (const file of readdirSync('assets/art').filter((name) => name.endsWith('.webp'))) copyFileSync(`assets/art/${file}`, `${OUT}/art/${file}`);
copyFileSync('src/style.css', `${OUT}/css/style.css`);
copyFileSync('src/app.js', `${OUT}/js/app.js`);
// Remove pages for mantras that no longer exist, so deleted entries don't stay published.
const slugs = new Set([...mantras.map((m) => m.slug), ...INFO_PAGES.map((p) => p.slug)]);
for (const dir of readdirSync(OUT, { withFileTypes: true })) {
  if (dir.isDirectory() && !slugs.has(dir.name) && existsSync(`${OUT}/${dir.name}/index.html`)) rmSync(`${OUT}/${dir.name}`, { recursive: true });
}
write(`${OUT}/index.html`, homePage());
mantras.forEach((m) => write(`${OUT}/${m.slug}/index.html`, mantraPage(m)));
INFO_PAGES.forEach((page) => write(`${OUT}/${page.slug}/index.html`, infoPage(page)));
write(`${OUT}/404.html`, errorPage(404, 'Page not found', 'This page may have moved or the address may be incorrect. Browse the collection to find your prayer.'));
write(`${OUT}/500.html`, errorPage(500, 'Something went wrong', 'The website could not complete this request. Please try again in a little while.'));
write(`${OUT}/_headers`, ['/css/*', '/js/*'].map((p) => `${p}
  Cache-Control: public, max-age=604800
`).concat(['/img/*', '/art/*'].map((p) => `${p}
  Cache-Control: public, max-age=2592000
`)).concat([
  'https://mantra-mandir.pages.dev/*\n  X-Robots-Tag: noindex\n',
  'https://:version.mantra-mandir.pages.dev/*\n  X-Robots-Tag: noindex\n',
]).join(''));
write(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['', ...mantras.map((m) => `${m.slug}/`), ...INFO_PAGES.map((p) => `${p.slug}/`)].map((p) => `<url><loc>${SITE.url}/${p}</loc></url>`).join('\n')}\n</urlset>\n`);
write(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);

const llmIndex = `# ${SITE.name}

> Hindu mantras, shlokas and stotras with Sanskrit text, transliteration, meanings and a manual 108-bead counter.

The website is for devotional reading and practice. Source notes identify references and variants. Excerpts are labelled. Outcomes are not guaranteed. Practice progress is saved locally in the browser. There is no audio feature or account system.

## Start here
- [Home](${SITE.url}/): Browse by deity, festival or intention.
${HERO_TAGS.map(slug => mantras.find(m => m.slug === slug)).map(m => `- [${m.h1}](${SITE.url}/${m.slug}/): Text, meanings and practice instructions.`).join('\n')}

## Website information
${INFO_PAGES.map(p => `- [${p.title}](${SITE.url}/${p.slug}/): ${p.desc}`).join('\n')}
- [Sitemap](${SITE.url}/sitemap.xml): Complete list of public content pages.
`;
write(`${OUT}/llms.txt`, llmIndex);
write(`${OUT}/llm.txt`, llmIndex);

const missing = [...new Set(['ganesha', ...mantras.map((m) => m.art).filter(Boolean)])].flatMap((n) => ['web', 'mob'].map((v) => `${n}_${v}`)).filter((n) => !existsSync(`${OUT}/art/${n}.webp`));
console.log(`Built ${mantras.length + INFO_PAGES.length + 3} pages in ./${OUT} (SITE_URL=${SITE.url})`);
if (missing.length) throw new Error('Missing artwork: ' + missing.join(', '));
