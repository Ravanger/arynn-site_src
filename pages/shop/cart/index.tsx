import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import CartPage from "src/CartPage"
import { useShoppingCart } from "use-shopping-cart"
import Stripe from "stripe"
import { ErrorResponseType } from "util/data.types"
import { fetchData } from "util/dataFetching"
import { useState } from "react"
import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"
import { removeProductFromCart } from "util/cart"

const Cart = () => {
  const [stripeLoading, setStripeLoading] = useState(false)
  const [cartInfo, setCartInfo] = useAtom(cartAtom)

  const { redirectToCheckout, cartDetails } = useShoppingCart()

  const handleStripeCheckout = async () => {
    if (cartInfo.products.length <= 0 || stripeLoading) return
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

  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      <CartPage
        cartItems={cartInfo.products}
        cartDetails={cartDetails}
        totalPrice={cartInfo.totalPrice}
        handleStripeCheckout={handleStripeCheckout}
        removeItem={removeProductFromCart}
        setCartInfo={setCartInfo}
        setWantedQuantity={() => {
          return
        }}
        stripeLoading={stripeLoading}
      />
    </>
  )
}

Cart.getLayout = getLayout

export default Cart
