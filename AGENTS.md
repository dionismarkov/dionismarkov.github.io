# dionismarkov.com

Personal portfolio for Dionis Markov. Production domain: `https://dionismarkov.com`.

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS; static export.
- Package manager: pnpm 11. Install with `pnpm install --frozen-lockfile`.
- Commands: `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`.
- Tests: source/domain regression checks plus lint, types, audit-high, and production build.
- Deployment: Cloudflare Pages, build `pnpm build`, output `out`, Node 24.

Preserve personal content and visual identity. Keep canonical URLs on `dionismarkov.com`; link ValtheraLabs and ValtheraSwap by HTTPS. Never commit secrets or edit generated `.next/`/`out/`. Do not casually change structured data, public identity, or package manager.
