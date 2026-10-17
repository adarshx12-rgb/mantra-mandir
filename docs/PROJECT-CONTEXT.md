# Mantra Mandir: project context

Updated 2026-10-18. See REDESIGN.md for the visual direction and MANTRA-SOURCES.md for the content review.

## Purpose
A lightweight static collection of Hindu mantras, with Sanskrit, Roman transliteration, Hinglish, meanings, audio controls and a 108-bead counter. No accounts, backend, analytics or downloaded fonts. The four established SEO URLs remain unchanged.

## Editing and building
- Edit data/mantras.mjs, build.mjs, src/style.css and src/app.js.
- Run node build.mjs to regenerate site/. Never edit generated HTML directly.
- Set SITE_URL to the production origin before deploying. The default is https://example.com.
- Preview: python -m http.server 8123 --directory site.
- Deploy site/ to a static host.

## Owner artwork
Originals are in images/: ganesha, gayatri, shiv, krishna and saraswati, each with _web.png and _mob.png versions. Ganesha introduces the homepage; the four existing mantra pages each use their corresponding artwork. Ganesha has no mantra page yet.

Run python scripts/prepare-art.py (requires Pillow) after updating originals. It creates WebP delivery copies in assets/art/, at most 80,000 bytes each. The Node build copies them to site/art/. Desktop uses a landscape image; a picture source selects the supplied portrait at 640px and below. Collection cards use portrait art. Do not overwrite originals or owner-managed site/img/ or site/audio/.

## Layout and themes
Full-width paintings with reduced brightness. On mantra pages the introduction sits on the left and the player, verse, meaning and compact counter sit beside it in a translucent dark reading surface over the same artwork. The hero grows with its content; it has no fixed height. Below 1100px the counter stacks under the reading area; below 760px the introduction and practice stack into one column. Mobile keeps the supplied portrait behind the upper content. No animated stars, glowing pills or decorative emoji. System Palatino/Book Antiqua for titles, system sans-serif controls, Nirmala UI for Devanagari.

Gayatri: near-black and fire-gold. Shiva: deep indigo, pale moon-blue, ember accent. Krishna: midnight blue and warm gold. Saraswati: deep teal, pearl cream and rose-gold. See data theme values for exact colors.

## Content model
Each mantra contains slug, art, short, h1, optional displayTitle, deity, SEO title/desc, tagline, cardLine, theme, imgAlt, lines [{sa,en,hi}], meaning {sa,en,hi}, intro, benefits, howTo, bestTime, faqs, audio, sourceUrl and sourceNote. Optional bonus has label, sourceUrl, lines and meaning.

sa verses are Sanskrit; meaning.sa is Hindi. en verses use IAST transliteration; meaning.en is English. hi uses simplified Roman pronunciation with Hinglish meaning. Simplified pronunciation is not a phonetic substitute for instruction. Sanskrit is displayed without Vedic pitch accents. Sources and recitation variants are explained on each page. Avoid medical or guaranteed-result claims. A Sanskrit-literate review remains appropriate before publication.

## Interaction and storage
mm1 stores counts, malas, streak, total, last date, lastSlug and lastName. mmlang stores sa/en/hi. Storage reads/writes are guarded. Saved counts persist across days and are labelled as saved progress, not today's total. The mala tally increments at 108. A pending completion timer is cancelled on the next count or reset. Script tabs support arrow keys, Home and End. Without JS all script panes remain visible. The home shows a saved-practice link and rotates a suggested mantra by weekday.

## Audio
Recordings have not been supplied. Expected files in site/audio/: gayatri-mantra.mp3, mahamrityunjay-mantra.mp3, om-krishnaya-vasudevaya-haraye-paramatmane.mp3, saraswati-mantra.mp3. The player labels missing recordings upfront; on play failure it uses the browser Hindi voice preview, whose Sanskrit pronunciation may vary. Audio is never autoplayed. Completed playback increments the count; Repeat starts another rendition.

## Verification
Build and syntax checks: node build.mjs; node --check src/app.js.
Static generated-output checks: python scripts/check-output.py.
Browser checks: serve on port 8123, then node scripts/check-site.mjs [path-to-playwright-module]. Playwright is a development-only external tool, not a site dependency. The script checks five pages at 1440/390/320px, images, overflow, keyboard tabs, saved language and progress, resume, 108 completion, reset and no-JS readability; it saves screenshots to output/review/.

Browser verification in the current session was blocked by Chrome launch permissions (spawn EPERM; alternate launch rejected because sandbox approval is disabled). Do not claim visual or interaction browser checks passed until the script runs successfully.

## Still needed for publication
Owner-provided recordings, production domain, optional site-name change, visual review in a browser, final Sanskrit/pronunciation proofreading. Existing image prompts are historical references; delivered owner artwork is now used.
