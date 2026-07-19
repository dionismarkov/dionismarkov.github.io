# Deployment

The production site is `https://dionismarkov.com` and is deployed as a Next.js static export through Cloudflare Pages native Git integration.

Use:

```text
Install: pnpm install --frozen-lockfile
Build: pnpm build
Output: out
Node: 24
Production variable: NEXT_PUBLIC_SITE_URL=https://dionismarkov.com
```

GitHub Actions validates pull requests and does not deploy. Detailed Pages, custom-domain, DNS, HTTPS, and `www` redirect instructions are in `CLOUDFLARE_DEPLOYMENT.md` and `DOMAINS_AND_DNS.md`.
