import { NextApiRequest, NextApiResponse } from "next"
import { validateCartItems } from "use-shopping-cart/src/serverUtil"
import Stripe from "stripe"
import { getShopItems } from "util/dataFetching"
import { CartDetails, Product } from "use-shopping-cart"
import { readFile } from "util/cache"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      let shopItems: Product[] = await readFile(".shopCache")
      if (shopItems.length <= 0) shopItems = await getShopItems()

      const cartItems: CartDetails = req.body
      const line_items = validateCartItems(shopItems, cartItems)

      const sessionParams: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        mode: "payment",
        billing_address_collection: "required",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items,
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/shop/cart`,
      }

      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        sessionParams
      )

      res.status(200).json(checkoutSession)
    } catch (error) {
      console.error(error)
      res.status(500).json({ statusCode: 500, message: error.message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export default handler
