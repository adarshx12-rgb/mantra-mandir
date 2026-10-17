# Mantra Mandir

Static devotional site. No accounts, backend or runtime dependencies.

- Build: `node build.mjs` (set `SITE_URL` to your production domain).
- Preview: `python -m http.server 8123 --directory site`.
- Content and source notes: `data/mantras.mjs`.
- Original artwork: `images/<deity>_web.png` and `<deity>_mob.png`.
- Prepare artwork after changes: `python scripts/prepare-art.py` (Pillow required). Optimized copies live in `assets/art/`; build copies them into `site/art/`.
- Recordings: owner-supplied `site/audio/*.mp3`, filenames in the content model.
- Deploy `site/`. Read `docs/PROJECT-CONTEXT.md` for architecture and remaining launch tasks.
