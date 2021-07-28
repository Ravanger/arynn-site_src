import { CartItemFrameType } from "./CartItem.types"

const CartItemFrame = (props: CartItemFrameType) => (
  <div className="rounded-xl p-10 relative grid gap-8 lg:gap-16 lg:grid-cols-3 lg:items-center sm:border-15 sm:border-blue">
    {props.children}
  </div>
)

export default CartItemFrame
