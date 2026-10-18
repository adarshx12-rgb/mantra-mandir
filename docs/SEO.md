# On-page SEO — 2026-10-19

Production origin: https://mantramandir.com (override with SITE_URL at build time).

## Approved keyword mapping

| Page | Primary keyword | Supporting keywords |
| --- | --- | --- |
| /gayatri-mantra/ | gayatri mantra | gayatri mantra lyrics; gayatri mantra meaning |
| /mahamrityunjay-mantra/ | mahamrityunjay mantra | mahamrityunjay mantra in hindi; mahamrityunjay mantra meaning in hindi |
| /om-krishnaya-vasudevaya-haraye-paramatmane-mantra/ | om krishnaya vasudevaya haraye paramatmane mantra | om krishnaya vasudevaya haraye paramatmane mantra meaning in hindi; om krishnaya vasudevaya haraye paramatmane mantra lyrics |
| /saraswati-mantra/ | saraswati mantra | maa saraswati mantra; saraswati mantra for students; saraswati mantra in hindi |
| / | Main collection linking to all four pages | 108 mantra counter |

The owner approved these terms after requesting Ahrefs review; search volumes and difficulty have not been independently checked. The repeated Gayatri meaning suggestion was deduplicated. Further supporting keywords require owner review before addition.

## Changes

- Unique primary-page titles and descriptions; full primary Krishna phrase used in its visible H1 and homepage link.
- Supporting headings and contextual explanations in data/seo.mjs. Hindi explanations are visible outside script tabs for relevant pages. Sanskrit in Devanagari is not mislabelled as a Hindi translation.
- src/home-guide.html contains 871 words, including headings, rendered into the homepage at build time. Includes contextual links to all four primary pages and guidance about the manual tool, storage and sources.
- Homepage H1 describes its purpose. Existing page URLs retained.
- Open Graph type, site name, locale, title, description, URL, image, image type and alt text. Mantra pages use article; homepage uses website. Twitter summary cards include explicit title, description, image and alt text.
- Canonicals, structured-data URLs, robots.txt and sitemap use the production origin. Existing Article, FAQPage, BreadcrumbList, WebSite and ItemList markup retained. No invented ratings or reviewer credentials.
- Owner clarified sources are books/teachings, not a review of the website. Homepage credits published devotional sources and teachings without names or an unsupported verification claim.

## Scope

## Additional approved deity keywords

Added to existing pages on 2026-10-19. No new pages or homepage keyword list were created; the 871-word guide and original four primary targets are retained.

| Existing page | Added keyword group |
| --- | --- |
| /om-ham-hanumate-namah/ | hanuman mantra; hanuman mantra in hindi |
| /om-dum-durgayai-namah/ | devi mantra; durga devi mantra |
| /om-namah-shivaya/ | shiv mantra; shiv mantra in hindi |
| /om-gan-ganapataye-namah/ | ganesh mantra; ganesh mantra lyrics |
| /om-krishnaya-vasudevaya-haraye-paramatmane-mantra/ | krishna mantra; krishna mantra in hindi |
| /apadam-apahartaram/ | ram mantra |

data/seo.mjs now supports optional title and desc overrides. These feed the HTML title, description, Open Graph, Twitter and Article metadata together. Specific prayer names remain the H1s. Krishna retains its established long primary title and heading; broader phrases appear in explanatory copy. Hindi-script searches receive an explicit distinction between the Sanskrit original in Devanagari and the Hindi explanation. User-reported Ahrefs metrics have not been independently verified.

## Build and deployment

The generated _headers file sets X-Robots-Tag: noindex only on mantra-mandir.pages.dev and :version.mantra-mandir.pages.dev hosts. The custom domain stays indexable. Existing cache rules remain. Rules are generated in build.mjs and follow Cloudflare's hostname placeholder syntax.

Homepage FAQ: seven reader-focused questions in data/home-faqs.mjs, rendered visibly and as FAQPage JSON-LD with Question and acceptedAnswer objects. The context is https://schema.org without angle brackets. Existing mantra-page FAQ markup remains. Google discontinued FAQ rich results on May 7, 2026 (https://developers.google.com/search/updates); this markup does not imply rich-result eligibility.

Rebuilt with node build.mjs. No automated or browser tests run for this change. Publication, live domain configuration and Search Console submission are outside this edit; generated files must be deployed to the stated origin for public discovery.

References: https://developers.google.com/search/docs/appearance/title-link and https://ogp.me/.

## Title and description length (2026-10-19)

Expanded prayer pages use fitTitle/fitDesc in data/mantras.mjs: the first title variant of at most 60 characters and the first description of at most 160 is used, dropping "Chanting", then the brand suffix, then the deity name. Primary titles were shortened while keeping their keywords: Gayatri Mantra Lyrics & Meaning – Sanskrit, Hinglish; Mahamrityunjay Mantra in Hindi Script – Lyrics & Meaning; Saraswati Mantra (Ya Kundendu) – Lyrics & Meaning in Hindi; Om Krishnaya Vasudevaya Haraye Paramatmane Mantra Lyrics. The Krishna description now names it a Krishna mantra, and data/seo.mjs supports an optional aboutHeading (Krishna: About this Krishna mantra). Information pages use the Ganesha artwork for Open Graph and Twitter images.
