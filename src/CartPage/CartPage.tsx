import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import CartItem from "./CartItem"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { Fragment, MouseEventHandler } from "react"
import Stripe from "stripe"
import { fetchJSON } from "util/dataFetching"

interface ErrorResponseType {
  statusCode: number
  message: string
}

const CartPage = () => {
  const {
    clearCart,
    removeItem,
    redirectToCheckout,
    cartDetails,
    totalPrice,
    cartCount,
  } = useShoppingCart()
  const cartItems = Object.entries(cartDetails).map((item) => item[1])

  const handleCheckout: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault()
    if (cartCount <= 0) return

    const response: Stripe.Checkout.Session &
      ErrorResponseType = await fetchJSON("/api/checkout", cartDetails)

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    const error = await redirectToCheckout({ sessionId: response.id })
    if (error) console.error(error)
  }

  return (
    <div className="space-y-4">
      {cartItems.map((cartItem) => (
        <Fragment key={cartItem.sku}>
          <CartItem
            item={cartItem}
            removeCartItem={() => removeItem(cartItem.sku)}
          />
          <Spacer />
          <HeaderBar />
          <Spacer />
        </Fragment>
      ))}
      <span>
        Total: {formatCurrencyString({ value: totalPrice, currency: CURRENCY })}
      </span>
      <button onClick={clearCart}>Clear cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default CartPage
