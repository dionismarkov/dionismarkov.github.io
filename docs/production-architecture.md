# Production architecture

This repository owns `https://dionismarkov.com`. It is an independent Next.js static export served from `out/` by Cloudflare Pages. It has no server runtime, authentication, database, or API.

`NEXT_PUBLIC_SITE_URL` controls the production origin and defaults to the canonical apex domain. Metadata, robots, and sitemap use that origin.

Cross-site links present ValtheraLabs as Dionis Markov's company (`https://valtheralabs.io`) and ValtheraSwap as its product (`https://valtheraswap.io`). Production-facing links must not use localhost or GitHub Pages origins.
