import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get('plan') ?? 'pro_monthly'
  const priceId = plan === 'pro_yearly'
    ? process.env.STRIPE_PRICE_PRO_YEARLY!
    : process.env.STRIPE_PRICE_PRO_MONTHLY!
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
  })
  return NextResponse.redirect(session.url!)
}
