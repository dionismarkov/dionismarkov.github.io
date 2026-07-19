# Release checklist

- [ ] Confirm branch and clean intended diff.
- [ ] Resolve competing npm/pnpm lockfile ownership before dependency changes; pnpm is authoritative today.
- [ ] `pnpm install --frozen-lockfile`
- [ ] `pnpm lint`
- [ ] `pnpm exec tsc --noEmit`
- [ ] `NEXT_PUBLIC_SITE_URL=https://dionismarkov.com pnpm build`
- [ ] Inspect `out/`, canonical URL, robots, sitemap, favicon, OG image, 404, and all external links.
- [ ] Verify desktop/mobile layout and keyboard navigation on preview.
- [ ] Verify Cloudflare Pages preview before promoting production.
- [ ] Verify apex 200, `www` 301, TLS, and response headers.
- [ ] Keep previous successful Pages deployment available for rollback.
