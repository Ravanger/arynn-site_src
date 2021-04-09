import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import CartItem from "./CartItem"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { Fragment, MouseEventHandler } from "react"
import Stripe from "stripe"
import { fetchJSON } from "util/dataFetching"
import Button from "src/common/Button"

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
    <>
      <div>
        <HeaderBar>Your Cart</HeaderBar>
        <Spacer size="2rem" />
        {cartItems.map((cartItem) => (
          <Fragment key={cartItem.sku}>
            <CartItem
              item={cartItem}
              removeCartItem={() => removeItem(cartItem.sku)}
            />
            <Spacer size="2rem" />
          </Fragment>
        ))}
      </div>
      <div className="w-full md:flex md:flex-row md:justify-end">
        <div className="md:w-1/3">
          <div className="flex flex-row items-center gap-4 justify-center">
            <HeaderBar hrClassName="hidden flex-grow flex-shrink border-1 border-blue border-solid md:block" />
            <span className="text-3xl">
              {formatCurrencyString({ value: totalPrice, currency: CURRENCY })}
            </span>
          </div>
          <Spacer />
          <Button onClick={handleCheckout} className="md:col-start-4">
            Checkout
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartPage
