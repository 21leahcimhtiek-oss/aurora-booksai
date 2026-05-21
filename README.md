# ReadAI

> AI book recommendations and reading assistant

## Features
- Book recommendations
- Reading summaries
- Discussion questions
- Reading tracker
- Author insights

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- OpenAI GPT-4o-mini
- Stripe Subscriptions
- Vercel deployment

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in API keys
npm run dev
```

## Pricing
| Plan | Price |
|------|-------|
| Free | $0/mo |
| Pro  | $7/mo or $59/yr |

## Environment Variables
Set these in Vercel (or `.env.local` for local development):
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_PRICE_PRO_MONTHLY`
- `STRIPE_PRICE_PRO_YEARLY`
- `DATABASE_URL`

## Deploy
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

## CI
GitHub Actions runs install, lint, build, and tests on pushes and pull requests to `main`.

## License
MIT (c) 2026 Aurora Rayes LLC

## Aurora Ecosystem Positioning
This repository is part of the Aurora ecosystem of focused AI products, aligned to shared reliability and product-quality standards.

## No-Key-First Experience
Aurora products prioritize a no-key-first onboarding path so users can start with core functionality before adding external API keys or credentials.

<!-- AURORA:README:START -->
## Aurora Rayes alignment

**Aurora Books AI** is the preferred human-readable product name for generated Aurora Rayes collateral. The repository slug stays unchanged unless a separate rename process is approved.

- Keep README messaging grounded in verified capabilities already present in this repo.
- Prefer no-key-first evaluation and onboarding paths when the repo supports them.
- Keep SELL.md and MARKETING.md aligned with the actual setup, deployment, and feature surface documented here.
<!-- AURORA:README:END -->

