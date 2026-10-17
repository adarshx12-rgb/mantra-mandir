# Mantra Mandir

Static SEO site of Hindu mantras (Gayatri, Mahamrityunjay, Om Krishnaya Vasudevaya, Saraswati) with Sanskrit/English/Hinglish text, audio and a 108 mala counter. No backend or accounts.

**Read `docs/PROJECT-CONTEXT.md` first.** It has the full purpose, architecture, content model, UX decisions, gotchas and status.

Quick rules:
- Edit `data/mantras.mjs`, `build.mjs`, `src/style.css`, `src/app.js`. Then run `node build.mjs`. Never hand-edit generated HTML in `site/`.
- `site/img` and `site/audio` are owner-supplied. Do not overwrite or generate them.
- Keep it lightweight (no frameworks, no web fonts, images ≤ 80 KB) and mobile-first.
- No accounts, backend or server unless the owner asks.
- Mantras, shlokas and stotras only: no bhajans, aartis or devotional songs.
- Preview: `cd site && python -m http.server 8123`.
