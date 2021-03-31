import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { CartItemType } from "./CartItem.types"
import { IoClose } from "react-icons/io5"

const CartItem = (props: CartItemType) => (
  <div className="grid  gap-y-4 md:gap-x-4 md:grid-cols-2 md:grid-rows-2">
    <div className="w-full md:row-span-2 md:self-center">
      <Image
        src={props.item.image}
        alt={props.item.title}
        layout="responsive"
        width={600}
        height={600}
        objectFit="cover"
      />
    </div>
    <div className="relative">
      <button onClick={props.removeCartItem} className="absolute right-0 top-0">
        <IoClose />
      </button>
      <HeaderBar>{props.item.title}</HeaderBar>
      <h3>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</h3>
      <p className="text-justify">{props.item.description}</p>
    </div>
    <span className="md:col-start-2">${props.item.price}</span>
  </div>
)

export default CartItem
