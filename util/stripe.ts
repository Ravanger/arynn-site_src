import { Stripe } from "@stripe/stripe-js"
import { loadStripe } from "@stripe/stripe-js/pure"
import { CartDetails } from "use-shopping-cart"

export const CURRENCY = "CAD"

let stripePromise: Promise<Stripe | null>
export const getStripe = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) return stripePromise

  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }

  return stripePromise
}

export const itemIdExistsInCart = (
  searchArray: CartDetails,
  id: string
): boolean => {
  const objKeysArray = Object.keys(searchArray)
  return objKeysArray.indexOf(id) !== -1
}
