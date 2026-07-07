# Dionis Markov Portfolio

Personal portfolio site for Dionis Markov, deployed with GitHub Pages at:

https://dionismarkov.github.io/

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- GitHub Actions
- GitHub Pages static export

## Development

```bash
pnpm install
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Deployment

Every push to `main` runs `.github/workflows/deploy-pages.yml`.

The workflow:

- installs dependencies
- runs lint
- runs TypeScript checks
- builds the static site into `out/`
- deploys to GitHub Pages

## Repository

https://github.com/dionismarkov/dionismarkov.github.io

## Maintainer

Dionis Markov
