# Pricing Placeholders

Pricing is intentionally placeholder-only until sales, legal, tax, and support terms are approved.

| Tier | Placeholder price | Included |
|------|-------------------|----------|
| Free | $0 | Demo access and limited usage |
| Pro Monthly | $7/mo | Full feature set and priority support placeholder |
| Pro Annual | $59/yr | Annual discount placeholder |
| Partner | Custom | Bundle, agency, or managed-service packaging |

## Stripe readiness checklist
- [ ] Create Stripe products in the dashboard.
- [ ] Create test-mode Price IDs first.
- [ ] Store Price IDs in deployment environment variables.
- [ ] Configure webhook signing secret outside source control.
- [ ] Set `CHECKOUT_ENABLED=true` only after test checkout and refund policy approval.
