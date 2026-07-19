# Cloudflare Pages deployment

- Source: GitHub repository `dionismarkov/dionismarkov.github.io`
- Production branch: `main`
- Framework preset: Next.js (Static HTML Export)
- Root directory: `/`
- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm build`
- Output: `out`
- Node: `24`
- Environment: `NEXT_PUBLIC_SITE_URL=https://dionismarkov.com`

Cloudflare project created: `dionismarkov`; account-provided preview hostname: `dionismarkov-336.pages.dev`. It currently has no Git source or deployment.

Create a Pages project through Cloudflare's Git integration. Enable preview deployments for branches/PRs. Add `dionismarkov.com` as custom domain. Add `www.dionismarkov.com`, then configure an account-level Redirect Rule: hostname equals `www.dionismarkov.com` → dynamic redirect `https://dionismarkov.com${uri.path}` with query preserved, status 301.

Use SSL/TLS Full (strict), Always Use HTTPS, and Automatic HTTPS Rewrites. Do not invent a CNAME target: use the target shown by Cloudflare when binding the custom domain.
