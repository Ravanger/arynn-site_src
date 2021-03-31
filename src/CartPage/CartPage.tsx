import { shopCartAtom } from "atoms/store"
import { useAtom } from "jotai"
import CartItem from "./CartItem"

const CartPage = () => {
  const [cartItems, dispatchCartAction] = useAtom(shopCartAtom)

  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem
          item={cartItem}
          removeCartItem={() => {
            dispatchCartAction({ type: "REMOVE", payload: cartItem })
          }}
        />
      ))}
      <button
        onClick={() => {
          dispatchCartAction({ type: "CLEAR" })
        }}
      >
        Clear cart
      </button>
    </>
  )
}

export default CartPage
