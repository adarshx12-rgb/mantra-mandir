# Mantra Mandir: project context

Updated 2026-10-19. See REDESIGN.md for the visual direction and MANTRA-SOURCES.md for the content review.

## Purpose
A lightweight static collection of 13 Hindu prayers, with Sanskrit, Roman transliteration, Hinglish, meanings and a manual 108-bead counter. No accounts, backend or downloaded fonts. Google Analytics 4 (G-RL972RLFVJ) is included on every page by head() in build.mjs but only loads when location.hostname matches the SITE_URL host (pages.dev and local previews are not tracked) and after the visitor accepts the cookie banner. The choice is stored as mmconsent in localStorage; the footer's Cookie settings button reopens the banner, and Decline removes _ga cookies. The Privacy Policy and Cookie Policy (/cookie-policy/) describe it. The four established SEO URLs remain unchanged. Nine new prayer pages come from the owner's Collection of Mantras PDF.

## Editing and building
- Deployed to Cloudflare Pages project `mantra-mandir` (production branch `main`), https://mantra-mandir.pages.dev. Initial deployment: https://e95f741f.mantra-mandir.pages.dev. Direct upload of the built site; Git pushes do not automatically deploy. Update with `node build.mjs` followed by `npx wrangler pages deploy site --project-name mantra-mandir --branch main --commit-dirty=true`. Custom domain https://mantramandir.com is connected to the Pages project and is the canonical, indexable site; www and http redirect to it with a 301. The domain is a Cloudflare zone, so WAF and other zone rules apply to it, and Cloudflare features that inject scripts (Rocket Loader, Web Analytics, Zaraz) need CSP updates in build.mjs first.
- Edit data/mantras.mjs, build.mjs, src/style.css and src/app.js.
- Run node build.mjs to regenerate site/. Never edit generated HTML directly.
- The production origin defaults to https://mantramandir.com. SITE_URL can override it at build time.
- Preview: python -m http.server 8123 --directory site.
- Deploy site/ to a static host.

## Owner artwork
Originals are in images/: ganesha, gayatri, shiv, krishna and saraswati, each with _web.png and _mob.png versions. Ganesha introduces the homepage and the Ganesh prayer page. Pages reuse the matching deity artwork. Durga, Lakshmi and Hanuman have no supplied artwork: these pages use distinct CSS color treatments with a subtle Om, not another deity's image. Their art field is null; image metadata is omitted.

Run python scripts/prepare-art.py (requires Pillow) after updating originals. It creates WebP delivery copies in assets/art/, at most 80,000 bytes each. The Node build copies them to site/art/. Desktop uses a landscape image; a picture source selects the supplied portrait at 640px and below. Collection cards use portrait art. Do not overwrite originals or owner-managed site/img/ or site/audio/.

## Layout and themes
Full-width paintings with reduced brightness. On mantra pages the introduction sits on the left and the verse, meaning and compact counter sit beside it in a translucent dark reading surface over the same artwork. The hero grows with its content; it has no fixed height. Below 1100px the counter stacks under the reading area; below 760px the introduction and practice stack into one column. Mobile keeps the supplied portrait behind the upper content. No animated stars, glowing pills or decorative emoji. System Palatino/Book Antiqua for titles, system sans-serif controls, Nirmala UI for Devanagari.

Gayatri: near-black and fire-gold. Shiva: deep indigo, pale moon-blue, ember accent. Krishna: midnight blue and warm gold. Saraswati: deep teal, pearl cream and rose-gold. See data theme values for exact colors.

## Content model
Each mantra contains slug, art, short, h1, optional displayTitle, deity, SEO title/desc, tagline, cardLine, theme, imgAlt, lines [{sa,en,hi,englishMeaning}], meaning {sa,en,hi}, intro, benefits, howTo, bestTime, faqs, sourceUrl and sourceNote. Optional bonus has label, sourceUrl, lines and meaning.

sa verses are Sanskrit; meaning.sa is Hindi. en verses use IAST transliteration; meaning.en is English. hi uses simplified Roman pronunciation with Hinglish meaning. Simplified pronunciation is not a phonetic substitute for instruction. Sanskrit is displayed without Vedic pitch accents. Sources and recitation variants are explained on each page. Avoid medical or guaranteed-result claims. A Sanskrit-literate review remains appropriate before publication.

## Interaction and storage

On mobile (760px and below), a Chant counter button beside Begin chanting opens a small floating counter. Drag its header (or use arrow keys while focused) to reposition it; ? or Escape closes it without clearing progress. It stays within viewport edges and shares saved progress, reset and completion behavior with the full mala counter. It starts closed and is hidden on desktop and without JavaScript. CSS and JS URLs include content hashes to prevent stale cached assets after deployments.
The shared top navigation includes an About dropdown for all four information pages. It works with native details/summary, closes on outside click or Escape with JS, and retains footer links. The owner enabled email routing; data/pages.mjs now uses active hello@mantramandir.com and the contact/privacy/terms text reflects email availability.
Deity navigation is sorted alphabetically by displayed name. The homepage resume reminder has a separate cross button that deletes the displayed prayer's saved count and completed malas and clears the last-prayer pointer. Other prayers, lifetime totals, streak history and script preference remain. The homepage FAQ is defined in data/home-faqs.mjs; its visible answers and FAQPage JSON-LD use the same array.

mm1 stores counts, malas, streak, total, last date, lastSlug and lastName. mmlang stores sa/en/hi. Storage reads/writes are guarded. Saved counts persist across days and are labelled as saved progress, not today's total. The mala tally increments at 108. A pending completion timer is cancelled on the next count or reset. Script tabs support arrow keys, Home and End. Without JS all script panes remain visible. The home shows a saved-practice link and rotates a suggested mantra by weekday.

## Audio removed (2026-10-19)
The owner requested removal of the audio feature. Pages have no player, repeat control, browser speech fallback or playback counting. Titles and descriptions no longer advertise audio, and the content model no longer stores audio filenames. Chant counting is manual. Existing owner-managed site/audio/ files are preserved.

## On-page SEO (2026-10-19)
The four primary search pages have approved supporting keywords, contextual headings and explanations in data/seo.mjs, updated metadata, and their full primary names as H1s. src/home-guide.html supplies an 871-word homepage guide with internal links. Open Graph and Twitter metadata use page-specific images and descriptions; canonical URLs, sitemap and structured data use mantramandir.com. Sources are books/teachings, as confirmed by the owner; no claim that pandits verified the website is made. Additional keywords require owner review. See docs/SEO.md for the approved mapping and implementation scope.

## Verification

## Information pages and crawler files (2026-10-19)
data/pages.mjs defines About Us, Privacy Policy, Terms & Conditions and Contact Us. build.mjs renders them with metadata, structured data and footer links, and preserves these routes during stale-page cleanup. CONTACT holds the owner's exact temporary hello@mantramandir address, active:false; replace it and enable it only after routing is ready. Policy content reflects local storage and the current static features; revise it if hosting, contact handling or tracking changes.

The build generates 404.html and 500.html with root-relative assets/navigation and noindex. Cloudflare Pages can use the root 404.html for missing paths. The host must configure actual 500 responses; generating a file does not install server error handling. Python's basic preview server does not automatically use these custom error files. Visit /404.html and /500.html to preview them directly.

_headers applies security headers to every route: a Content-Security-Policy, nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy and HSTS. The CSP allows the two inline head scripts by SHA-256 hash, recomputed by build.mjs, plus Google Analytics origins. Any new inline script, inline event handler (onclick=) or third-party resource (fonts, embeds, CDN scripts) will be blocked until it is added to CSP in build.mjs. The python preview server ignores _headers, so check CSP on a pages.dev deployment (browser console shows violations).

robots.txt points to the absolute sitemap. sitemap.xml includes the home, all prayers and the four information pages, excluding errors. llms.txt and the requested llm.txt contain the same concise Markdown overview and links. These are discovery aids, not access restrictions or ranking guarantees. Build produces 62 HTML pages; no new tests were run for this change.

Prayer pages now show Continue your practice as text links with short descriptions, without repeated artwork cards. PDF-derived FAQs explain the prayer meaning instead of asking where it appears in the owner's book. Bibliographic citations remain in source notes; visible FAQs and FAQPage structured data share the updated content.

Titles are capped at 60 characters and descriptions at 160 (see docs/SEO.md). Additional approved deity terms are mapped in docs/SEO.md to six existing pages: Hanuman, Durga/Devi, Shiv, Ganesh, Krishna and Ram. data/seo.mjs carries contextual text and optional title/description overrides, which build.mjs uses consistently in search/social/Article metadata. Related-page exclusion compares slugs so overridden page objects cannot link to themselves.
Build and syntax checks: node build.mjs; node --check src/app.js.
Static generated-output checks: python scripts/check-output.py.
Collection and content checks: node scripts/check-collections.mjs.
Browser checks: serve on port 8123, then node scripts/check-site.mjs [path-to-playwright-module]. Playwright is a development-only external tool, not a site dependency. The script checks five pages at 1440/390/320px, images, overflow, keyboard tabs, saved language and progress, resume, 108 completion, reset and no-JS readability; it saves screenshots to output/review/.

2026-10-18: check-site.mjs passed on all 14 pages (Playwright 1.48.2 installed outside the repo, using the installed Chrome via channel 'chrome'). Lazy-loaded images never decode offscreen, so the script sets them to eager before awaiting decode(); without that it hangs. The 320px run found a long Lakshmi compound overflowing; verse lines now use overflow-wrap:break-word, which breaks only words that cannot fit.

## Still needed for publication
Production domain, optional site-name change, visual review in a browser, final Sanskrit/pronunciation proofreading. Existing image prompts are historical references; delivered owner artwork is now used.

Each verse line includes an English gloss beside it in all three script tabs. On mobile, the gloss appears directly beneath its line. The full meaning remains below the verse.

## Deity, festival and intention browsing
data/collections.mjs defines eight deities, six intentions and 14 festival/observance groups in usual January-to-December order. Festival month ranges are approximate seasonal windows, not dates for a specific year; lunar calendar and regional variation are explained in the UI. Intentions are editorial devotional themes, not promised outcomes. The home has one compact image-card browser with three keyboard-accessible tabs. Deity, festival and intention cards use native details/summary to reveal the complete matching prayer list; only one card per tab stays open with JS. The duplicate deity gallery and long collection lists were removed. Without JavaScript all three grids and their expandable cards work. Footer hashes reveal the correct tab, open the deity card and scroll to it. Deities without supplied artwork retain matching symbolic backgrounds.

data/pdf-mantras.mjs contains nine selected complete short prayers or explicitly labelled individual verses from the supplied 28-page PDF. data/mantras.mjs expands these into the common page model. Each entry has a PDF page/section citation and freshly written meanings. Existing Gayatri and Saraswati Vandana have additional PDF references without duplicating their pages. The collection does not reproduce all long stotras, the Hanuman Chalisa or the 108-name lists. See MANTRA-SOURCES.md for the import inventory. Future entries must have deityId and intentions, or a mapping in MANTRA_COLLECTIONS.

## Popular mantras (added 2026-10-18)
data/popular-mantras.mjs adds 22 widely chanted mantras and short verses, expanded by the shared expand() in data/mantras.mjs (same page model as the PDF entries). Lines are [Devanagari, IAST, gloss, optional Hinglish override]. These cite a textual tradition in `note` rather than a URL, so sourceUrl is optional and build.mjs only renders "View source" when present. Kali, Ayyappa and Murugan are new deities (symbolic backgrounds, no artwork yet), with festivals Makaravilakku, Thaipusam, Kali Puja, Skanda Sashti and the Sabarimala Mandala season. Totals: 35 prayers, 11 deities, 19 festival groups. The full Hanuman Chalisa is still not included (only the opening dohas).

## Navratri collection (added 2026-10-18)
Nine more Devi pages in data/popular-mantras.mjs: Aigiri Nandini (verse 1), Devi Kavach Navadurga verses, Shree Suktam (verses 1–2, Lakshmi), Vishwambhari Stuti (Gujarati, verse 1), Devi Gayatri, Durga Saptashloki (all 7 verses), Argala Stotram (verses 1–3), Shri Devi Stuti (9 Ya Devi verses), Jai Ambe Gauri (refrain + stanza 1). Long hymns show labelled excerpts, never implied as complete. Festivals may set `featured` (ordered slugs, any deity) shown before deity matches; both Navratris feature the owner's list via NAVRATRI in collections.mjs, resolved by festivalMantras(). 44 prayers total.

## Content rule: mantras, not bhajans (owner, 2026-10-18)
Only mantras, shlokas, stotras and Vedic hymns. No bhajans, aartis or devotional songs: Jai Ambe Gauri, Vishwambhari Stuti and the Hanuman Chalisa dohas were removed for this reason, and the Hanuman Chalisa is not planned. Sanskrit shlokas also recited at aarti (Karpura Gauram) and chanted calls (Swamiye Saranam Ayyappa) are kept. build.mjs now deletes generated page folders whose slug no longer exists. 41 prayers.

## Artwork complete and hero tags (2026-10-18)
All 11 deities now have owner artwork (images/<name>_web.png and _mob.png; Lakshmi's files are named laxmi_*). The earlier note that Durga, Lakshmi and Hanuman use symbolic backgrounds is superseded; symbolic-art remains only as a fallback for a future deity without art. scripts/prepare-art.py keeps WebP quality >= 40 and scales a detailed painting down (to at most 60%) rather than compressing it harder, so some _web files are about 1100–1500px wide. Kali's art shows traditional iconography (skull garland and, in kali_mob, a severed head); the owner reviewed it and chose to keep it. The home hero has quick-link tags to the four target keywords (HERO_TAGS in build.mjs) below "Explore the mantras".

## Vishnu collection (2026-10-18)
Added five prayers: Om Namo Narayanaya, Om Vishnave Namah, Vishnu Gayatri, Shantakaram Bhujagashayanam and Mangalam Bhagavan Vishnu. The existing Om Namo Bhagavate Vasudevaya remains at its established URL in Krishna. Totals: 46 prayers and 12 deities. Vishnu uses the owner's images/vishnu_web.png and vishnu_mob.png, delivered as WebP copies under 80 KB. Run `python scripts/prepare-art.py vishnu` to prepare just these assets; no arguments still prepares all deities. Popular entries now support optional sourceUrl links. No Vishnu recordings have been supplied.

## Selected Vedic Remedies entries (2026-10-18)
The owner selected contents entries 1, 2, 3, 4, 12, 13, 18, 24 and 35 from the local VEDIC REMEDIES FOR COMMON PROBLEMS.pdf (book title: Infallible Vedic Remedies, Swami Shantananda Puri). Entries 8 and 31 were explicitly excluded after clarification. Do not import the remaining contents or the 171-name table.

data/remedies-mantras.mjs adds nine pages: Annapurna, Dhanvantari, Achyuta/Ananta/Govinda, Hayagriva, the four Jayatyatibalo Ramo verses, the extended Mrityunjaya, bedtime verses, Apadam Apahartaram and Rukmini Vallabha. Entry 3 is the existing Buddhir Balam page with an added citation. Entry 12 supplies two prayers. Total: 55 prayers, 14 deity groups. New Rama and Annapurna groups use symbolic backgrounds until matching owner art is supplied; Dhanvantari and Hayagriva use Vishnu art with their specific names displayed. All entries have printed-page citations and fresh meanings; no local PDF is copied into the public site. Health and outcome claims from the book are not adopted as site promises. The bedtime verse preserves the book's six listed names and explicitly notes its inconsistent reference to seven.

scripts/render-source.ps1 accepts optional -Source and -Output parameters for inspecting local PDFs. The original defaults remain available.

Rama and Annapurna artwork is now supplied: images/rama_web.png, rama_mob.png, annapurna_web.png and annapurna_mob.png. This supersedes the symbolic-background note above. Their mantra pages and collection cards use responsive WebP copies; all 14 deity groups now have artwork (28 delivery assets). Run `python scripts/prepare-art.py rama annapurna` to prepare these four copies under 80,000 bytes each.

The selected remedies are also grouped under specific intentions: Food & nourishment (1), Health & well-being (2, 3, 4, 13), Confidence & clear speech (3 and the Hanuman verses in 12), Study & exams (both prayers in 12), Protection & reassurance (13, 24), Restful sleep (18), Marriage & companionship (35), and the existing Prosperity & abundance (24). Broad intention memberships remain available too. There are now 13 intention groups. These describe devotional themes, not guaranteed outcomes.

data/remedies-practice.mjs supplies book-specific howTo, bestTime, practiceSource and practiceNotes for all ten selected prayer pages (including the existing Buddhir Balam). These replace the generic expanded instructions after content expansion. build.mjs renders a cited How to chant section and Extra notes for your practice. Counts and durations are attributed to the book, not promised results. Mrityunjaya's 11-lakh versus 1-lakh conflict and the ambiguous morning/evening allocation for Apadam Apahartaram are explicit. Achamana includes the source's water-sipping instructions; Dhanvantari's six-month statement is source context, not medical advice. The 108-bead counter remains optional for prayers with smaller recommended counts.
