# Dionis Markov Portfolio

Personal portfolio site for Dionis Markov, deployed with Cloudflare Pages at:

https://dionismarkov.com/

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- GitHub Actions validation
- Cloudflare Pages static export

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm audit --audit-level high
pnpm build
```

## Deployment

Pull requests run non-destructive validation. Production deployment uses Cloudflare Pages native Git integration. Build command: `pnpm build`; output: `out/`. See `docs/CLOUDFLARE_DEPLOYMENT.md`.

## Repository

https://github.com/dionismarkov/dionismarkov.github.io

## Maintainer

Dionis Markov
