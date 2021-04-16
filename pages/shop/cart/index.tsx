import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import CartPage from "src/CartPage"
import { Product, useShoppingCart } from "use-shopping-cart"
import Stripe from "stripe"
import { ErrorResponseType } from "util/data.types"
import { fetchData } from "util/dataFetching"
import { useState } from "react"

const Cart = () => {
  const [loading, setLoading] = useState(false)

  const {
    removeItem,
    redirectToCheckout,
    cartDetails,
    totalPrice,
    cartCount,
  } = useShoppingCart()

  const handleStripeCheckout = async () => {
    if (cartCount <= 0 || loading) return
    setLoading(true)

    const response: Stripe.Checkout.Session &
      ErrorResponseType = await fetchData("/api/checkout", cartDetails)

    if (response.statusCode === 500) {
      console.error(response.message)
      setLoading(false)
      return
    }

    const error = await redirectToCheckout({ sessionId: response.id })
    if (error) console.error(error)
    setLoading(false)
  }

  const cartItems: Product[] = Object.entries(cartDetails).map(
    (item) => item[1]
  )

  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      <CartPage
        cartItems={cartItems}
        cartCount={cartCount}
        totalPrice={totalPrice}
        handleStripeCheckout={handleStripeCheckout}
        removeItem={removeItem}
        loading={loading}
      />
    </>
  )
}

Cart.getLayout = getLayout

export default Cart
