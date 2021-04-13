import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { CartItemType } from "./CartItem.types"
import { FaWindowClose } from "react-icons/fa"
import Spacer from "src/common/Spacer"
import { CURRENCY } from "util/stripe"
import { formatCurrencyString } from "use-shopping-cart"

const CartItem = (props: CartItemType) => (
  <div className="border-15 border-blue rounded-xl p-10 relative grid gap-8 md:gap-16 md:grid-cols-3 md:items-center">
    <button
      onClick={props.removeCartItem}
      className="absolute right-4 top-4 animate-scaleExpandIn hover:animate-scaleExpandOut"
    >
      <FaWindowClose
        size="1.2rem"
        className="text-pink hover:text-blue active:text-blue-light"
      />
    </button>
    <div className="w-full self-center">
      <Image
        src={props.item.image!}
        alt={props.item.name}
        layout="responsive"
        width={600}
        height={600}
        objectFit="cover"
      />
    </div>
    <div className="italic md:text-left">
      <h3 className="text-2xl font-bold">{props.item.name}</h3>
      <Spacer />
      <p className="md:text-justify text-sm">{props.item.description}</p>
    </div>
    <div className="flex flex-row items-center gap-4 justify-center">
      <HeaderBar hrClassName="hidden flex-grow flex-shrink border-1 border-blue border-solid md:block" />
      <span className="text-3xl">
        {formatCurrencyString({ value: props.item.price, currency: CURRENCY })}
      </span>
    </div>
  </div>
)

export default CartItem
