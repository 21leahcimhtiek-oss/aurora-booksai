# Aurora Rayes Books Agent

> AI book recommendations and reading assistant

Aurora Rayes Books Agent is part of the Aurora Rayes ecosystem. It packages a focused AI workflow for readers, book clubs, coaches, educators, and content teams with production-minded Next.js, clear environment boundaries, and sales-ready documentation.

## Features
- Book recommendations
- Reading summaries
- Discussion questions
- Reading tracker
- Author insights

## Commercial use cases
- Launch a branded Aurora Rayes assistant for books workflows.
- Use as a demoable lead magnet, paid subscription product, or internal enablement tool.
- Bundle with adjacent Aurora Rayes agents for portfolio, coaching, education, or agency offers.
- Customize prompts, copy, and pricing placeholders before connecting live billing.

## Sales and marketing resources
- [SELL.md](SELL.md) - sales one-pager, buyer profile, packaging, and objection handling.
- [marketing/pitch.md](marketing/pitch.md) - launch narrative, positioning, and channel ideas.
- [PRICING.md](PRICING.md) - placeholder tiers and Stripe readiness checklist.
- [SUPPORT.md](SUPPORT.md) - support, refund, and customer operations placeholders.

## Stack
- Next.js + TypeScript
- React UI in `src/app`
- OpenAI API integration
- Stripe configuration placeholders (checkout disabled by default)
- Vercel deployment configuration

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set only local or test credentials while developing. Live payment credentials and hosted checkout links are intentionally absent from this repository.

### Validation commands

```bash
npm run lint
npm run typecheck
npm run build
```

Run `npm run check` to execute the full local production gate.

## Environment and payment safety

Required for AI responses:
- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional, defaults to `gpt-4o-mini`)

No-key-first behavior:
- If `OPENAI_API_KEY` is not set, the chat API returns structured, local guidance instead of calling external AI services.
- This keeps local onboarding functional before adding paid API credentials.

Required only when enabling checkout:
- `CHECKOUT_ENABLED=true`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_PRICE_PRO_MONTHLY`
- `STRIPE_PRICE_PRO_YEARLY`
- `NEXT_PUBLIC_APP_URL`

Checkout remains disabled unless `CHECKOUT_ENABLED` is explicitly set to `true` and real Stripe values are configured outside source control.

## Privacy-first defaults
- `NEXT_TELEMETRY_DISABLED=1` is enabled in `.env.example`.
- Keep `APP_DATA_RETENTION_DAYS=0` unless your compliance workflow requires storage.
- Never commit real API keys, webhook secrets, or customer PII into this repository.

## Pricing placeholders

| Plan | Placeholder price | Notes |
|------|-------------------|-------|
| Free | $0 | Local/demo access and limited AI usage. |
| Pro Monthly | $7/mo | Replace with approved Stripe Price ID before launch. |
| Pro Annual | $59/yr | Replace with approved Stripe Price ID before launch. |

## Deploy
1. Import `21leahcimhtiek-oss/aurora-booksai` in Vercel or your preferred host.
2. Configure environment variables from `.env.example`.
3. Keep `CHECKOUT_ENABLED=false` until pricing, tax, support, and refund terms are approved.
4. Run CI/build checks before promoting to production.

## CI
GitHub Actions runs install plus available lint/build/test scripts on pushes and pull requests to `main`.

## License
MIT (c) 2026 Aurora Rayes LLC

## Aurora Ecosystem Positioning
This repository is part of the Aurora ecosystem of focused AI products, aligned to shared reliability and product-quality standards.

## No-Key-First Experience
Aurora products prioritize a no-key-first onboarding path so users can start with core functionality before adding external API keys or credentials.
