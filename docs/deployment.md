# Deployment Guide

## GitHub Pages

This project builds as a static Next.js export and deploys through GitHub Actions.

### Prerequisites

- GitHub account
- Repository pushed to GitHub
- Pages source set to GitHub Actions

### Local Validation

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The static site is generated in `out/`.

### Repository Setup

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Set Build and deployment source to GitHub Actions.
5. Push to `main`.

The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, runs lint/typecheck, builds static output, uploads `out/`, and deploys Pages.

### User Page URL

For `https://dionismarkov.github.io`, the GitHub repository must be named:

```text
dionismarkov.github.io
```

and it must belong to the `dionismarkov` GitHub account or organization.

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://dionismarkov.github.io
NEXT_PUBLIC_GITHUB_URL=https://github.com/dionismarkov
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/dionismarkov
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/dionismarkov
```
