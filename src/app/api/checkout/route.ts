import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const PLACEHOLDER_PATTERN = /REPLACE_WITH|\.\.\./

function isConfigured(value: string | undefined): value is string {
  return Boolean(value && !PLACEHOLDER_PATTERN.test(value))
}

export async function GET(req: NextRequest) {
  if (process.env.CHECKOUT_ENABLED !== 'true') {
    return NextResponse.json(
      { error: 'Checkout is disabled. Set CHECKOUT_ENABLED=true and configure Stripe secrets outside source control.' },
      { status: 503 }
    )
  }

  const plan = req.nextUrl.searchParams.get('plan') ?? 'pro_monthly'
  const secretKey = process.env.STRIPE_SECRET_KEY
  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  const priceId = plan === 'pro_yearly'
    ? process.env.STRIPE_PRICE_PRO_YEARLY
    : process.env.STRIPE_PRICE_PRO_MONTHLY

  if (!isConfigured(secretKey) || !isConfigured(priceId) || !isConfigured(appUrl)) {
    return NextResponse.json(
      { error: 'Stripe checkout is not configured. Add deployment secrets and approved Price IDs before enabling payments.' },
      { status: 503 }
    )
  }

  const stripe = new Stripe(secretKey)
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl}/dashboard?upgraded=1`,
    cancel_url: `${appUrl}/pricing`,
  })

  return NextResponse.redirect(session.url!)
}
