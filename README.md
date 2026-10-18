# Mantra Mandir

Static devotional site. No accounts, backend or runtime dependencies.

- Build: `node build.mjs` (set `SITE_URL` to your production domain).
- Preview: `python -m http.server 8123 --directory site`.
- Content and source notes: `data/mantras.mjs`.
- Original artwork: `images/<deity>_web.png` and `<deity>_mob.png`.
- Prepare artwork after changes: `python scripts/prepare-art.py` (Pillow required). Optimized copies live in `assets/art/`; build copies them into `site/art/`.
- Homepage guide: `src/home-guide.html`. Approved SEO terms and implementation notes: `docs/SEO.md`.
- Deploy `site/`. Read `docs/PROJECT-CONTEXT.md` for architecture and remaining launch tasks.
- Cloudflare Pages project: `mantra-mandir`, production branch `main`, URL: https://mantra-mandir.pages.dev.
- Update production: `node build.mjs`, then `npx wrangler pages deploy site --project-name mantra-mandir --branch main --commit-dirty=true`.
