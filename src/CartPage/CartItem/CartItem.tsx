import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { CartItemType } from "./CartItem.types"
import { FaWindowClose } from "react-icons/fa"
import Spacer from "src/common/Spacer"
import { CURRENCY } from "util/stripe"
import { formatCurrencyString } from "use-shopping-cart"

const CartItem = (props: CartItemType) => (
  <div className="rounded-xl p-10 relative grid gap-8 md:gap-16 md:grid-cols-3 md:items-center sm:border-15 sm:border-blue">
    <button
      onClick={props.removeCartItem}
      className="absolute right-4 top-4 animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none"
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
      <h3 className="font-bold sm:text-2xl">{props.item.name}</h3>
      <Spacer />
      <p className="md:text-justify text-xs sm:text-sm">
        {props.item.description}
      </p>
    </div>
    <div className="flex flex-row items-center gap-4 justify-center">
      <HeaderBar hrClassName="hidden flex-grow flex-shrink bg-blue h-0.5 border-none lg:block" />
      <span className="text-3xl">
        {formatCurrencyString({ value: props.item.price, currency: CURRENCY })}
      </span>
    </div>
  </div>
)

export default CartItem
