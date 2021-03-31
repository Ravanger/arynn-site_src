import Image from "next/image"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { CartItemType } from "./CartItem.types"

const CartItem = (props: CartItemType) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <Image
      src={props.item.image}
      alt={props.item.title}
      layout="intrinsic"
      width={600}
      height={600}
      objectFit="cover"
    />
    <div>
      <button onClick={props.removeCartItem}>Remove</button>
      <h2>{props.item.title}</h2>
      <h3>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</h3>
      <p>{props.item.description}</p>
      <span>${props.item.price}</span>
    </div>
  </div>
)

export default CartItem
