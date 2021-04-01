import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { CartItemType } from "./CartItem.types"
import { IoClose } from "react-icons/io5"
import Spacer from "src/common/Spacer"

const CartItem = (props: CartItemType) => (
  <div className="grid gap-8 md:grid-cols-2">
    <div className="w-full self-center">
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
        <IoClose className="hover:text-pink" />
      </button>
      <Spacer />
      <HeaderBar>{props.item.title}</HeaderBar>
      <Spacer />
      <h3>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</h3>
      <Spacer />
      <p className="text-justify">{props.item.description}</p>
      <Spacer size="2rem" />
      <span className="text-pink font-bold text-2xl md:absolute md:left-0 md:bottom-0 md:w-full">
        ${props.item.price}
      </span>
    </div>
  </div>
)

export default CartItem
