import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { CartItemType } from "./CartItem.types"
import { FaWindowClose } from "react-icons/fa"
import Spacer from "src/common/Spacer"
import { CURRENCY } from "util/stripe"
import { formatCurrencyString } from "use-shopping-cart"
import Link from "next/link"

const CartItem = (props: CartItemType) => {
  const maxSelectedQuantity: number =
    props.item.product_data.metadata.maxQuantity || 23

  const quantityOptions = [...Array(maxSelectedQuantity)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ))

  return (
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
      <Link href={`/shop/${props.item.sku}`}>
        <a className="group">
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
        </a>
      </Link>
      <Link href={`/shop/${props.item.sku}`}>
        <a className="group">
          <div className="italic md:text-left">
            <h3 className="font-bold group-hover:text-pink sm:text-2xl">
              {props.item.name}
            </h3>
            <Spacer />
            <p className="text-xs sm:text-sm">{props.item.description}</p>
          </div>
        </a>
      </Link>
      <div className="flex flex-col items-center gap-4 md:col-start-3">
        <select
          value={props.quantityInCart}
          onChange={(event) => {
            props.setWantedQuantity(props.item.sku, ~~event.target.value)
          }}
        >
          {quantityOptions}
        </select>
        <div className="flex flex-row w-full items-center gap-4 justify-center">
          <HeaderBar hrClassName="hidden flex-grow flex-shrink bg-blue h-0.5 border-none lg:block" />
          <span className="text-3xl">
            {formatCurrencyString({
              value: props.item.price * props.quantityInCart,
              currency: CURRENCY,
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
