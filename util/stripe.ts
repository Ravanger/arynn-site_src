import { Stripe } from "@stripe/stripe-js"
import { loadStripe } from "@stripe/stripe-js/pure"

export const CURRENCY = "CAD"

let stripePromise: Promise<Stripe | null>
export const getStripe = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) return stripePromise

  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }

  return stripePromise
}
