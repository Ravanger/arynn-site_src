import { shopCartAtom } from "atoms/store"
import { useAtom } from "jotai"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import CartItem from "./CartItem"

const CartPage = () => {
  const [cartItems, dispatchCartAction] = useAtom(shopCartAtom)
  let totalPrice = 0
  cartItems.forEach((item) => (totalPrice += parseFloat(item.price)))

  return (
    <div className="space-y-4">
      {cartItems.map((cartItem) => (
        <>
          <CartItem
            item={cartItem}
            removeCartItem={() => {
              dispatchCartAction({ type: "REMOVE", payload: cartItem })
            }}
          />
          <Spacer />
          <HeaderBar />
          <Spacer />
        </>
      ))}
      <span>Total: ${totalPrice.toFixed(2)}</span>
      <button
        onClick={() => {
          dispatchCartAction({ type: "CLEAR" })
        }}
      >
        Clear cart
      </button>
      <button>Checkout</button>
    </div>
  )
}

export default CartPage
