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

Primary Pages project: `dionismarkow`; production hostname: `dionismarkow.pages.dev`. It currently uses Direct Upload. Deploy the verified static export with `wrangler pages deploy out --project-name dionismarkow --branch main`.

Rollback project: `dionismarkov`; Git-connected hostname: `dionismarkov-336.pages.dev`. Keep it until the primary project and custom domain have been verified.

For automatic future deployments, connect the primary project to GitHub or add a credentialed CI deployment without storing tokens in the repository. Add `dionismarkov.com` as custom domain. Add `www.dionismarkov.com`, then configure an account-level Redirect Rule: hostname equals `www.dionismarkov.com` → dynamic redirect `https://dionismarkov.com${uri.path}` with query preserved, status 301.

Use SSL/TLS Full (strict), Always Use HTTPS, and Automatic HTTPS Rewrites. Do not invent a CNAME target: use the target shown by Cloudflare when binding the custom domain.
