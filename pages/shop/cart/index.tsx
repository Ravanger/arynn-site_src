import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import CartPage from "src/CartPage"
import { useShoppingCart } from "use-shopping-cart"
import Stripe from "stripe"
import { ErrorResponseType } from "util/data.types"
import { fetchData } from "util/dataFetching"
import { useMemo, useState } from "react"
import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"

const Cart = () => {
  const [stripeLoading, setStripeLoading] = useState(false)
  const [cartItems, setCartItems] = useAtom(cartAtom)

  const { redirectToCheckout, cartDetails } = useShoppingCart()

  const handleStripeCheckout = async () => {
    if (cartItems.length <= 0 || stripeLoading) return
    setStripeLoading(true)

    const response: Stripe.Checkout.Session & ErrorResponseType =
      await fetchData("/api/checkout", cartDetails)

    if (response.statusCode === 500) {
      console.error(response.message)
      setStripeLoading(false)
      return
    }

    const error = await redirectToCheckout({ sessionId: response.id })
    if (error) console.error(error)
    setStripeLoading(false)
  }

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          (total +=
            item.price * (item.quantity || 1) +
            (item.customData
              ? item.customData.selectedAddons.numberOfPeople.price +
                item.customData.selectedAddons.type.price +
                item.customData.selectedAddons.addons.reduce(
                  (addonTotal, addonItem) => {
                    return (addonTotal += addonItem.price)
                  },
                  0
                )
              : 0)),
        0
      ),
    [cartItems]
  )

  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      <CartPage
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleStripeCheckout={handleStripeCheckout}
        setCartItems={setCartItems}
        stripeLoading={stripeLoading}
      />
    </>
  )
}

Cart.getLayout = getLayout

export default Cart
