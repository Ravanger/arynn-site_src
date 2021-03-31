import { CartItemType } from "./CartItem.types"

const CartItem = (props: CartItemType) => (
  <div>
    <h2 className="inline">{props.item.title}</h2>
    <button onClick={props.removeCartItem}>Remove</button>
  </div>
)

export default CartItem
