import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import CartItem from "./CartItem"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { Fragment } from "react"

const CartPage = () => {
  const { clearCart, removeItem, cartDetails, totalPrice } = useShoppingCart()
  const cartItems = Object.entries(cartDetails).map((item) => item[1])

  // const handleCheckout = async () => {
  //   const response = await fetch("/api/checkout", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ [product.id]: { ...product, quantity: 1 } }),
  //   })
  //     .then((res) => res.json())
  //     .catch((error) => console.error(error))
  // }

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
      {/* <button onClick={handleCheckout}>Checkout</button> */}
    </div>
  )
}

export default CartPage
