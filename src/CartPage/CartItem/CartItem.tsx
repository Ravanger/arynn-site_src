import Image from "next/image"
import HeaderBar from "src/common/HeaderBar"
import { CartItemType } from "./CartItem.types"
import { FaWindowClose } from "react-icons/fa"
import Spacer from "src/common/Spacer"
import { CURRENCY } from "util/stripe"
import { formatCurrencyString } from "use-shopping-cart"
import Link from "next/link"
import { motion } from "framer-motion"

const CartItem = (props: CartItemType) => {
  const maxSelectedQuantity: number =
    props.item.product_data?.metadata.maxQuantity || 23

  const quantityOptions = [...Array(maxSelectedQuantity)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ))

  return (
    <div className="rounded-xl p-10 relative grid gap-8 lg:gap-16 lg:grid-cols-3 lg:items-center sm:border-15 sm:border-blue">
      <motion.button
        onClick={props.removeCartItem}
        className="absolute right-4 top-4 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.05 }}
      >
        <FaWindowClose
          size="1.2rem"
          className="text-pink hover:text-blue active:text-blue-light"
        />
      </motion.button>
      <Link href={`/shop/${props.item.sku}`}>
        <a className="group">
          <div className="w-full self-center">
            {props.item.image ? (
              <Image
                src={props.item.image.split("/").pop() || ""}
                alt={props.item.name}
                layout="responsive"
                objectFit="cover"
                width={600}
                height={600}
                className="!bg-blue-light !bg-opacity-20"
              />
            ) : (
              <></>
            )}
          </div>
        </a>
      </Link>
      <Link href={`/shop/${props.item.sku}`}>
        <a className="group">
          <div className="italic lg:text-left">
            <h3 className="font-bold group-hover:text-pink sm:text-2xl">
              {props.item.name}
            </h3>
            <Spacer />
            <p className="text-xs sm:text-sm">{props.item.description}</p>
          </div>
        </a>
      </Link>
      <div className="flex flex-col items-center lg:col-start-3 lg:items-end">
        <select
          value={props.quantityInCart}
          onChange={(event) => {
            props.setCartItems(
              props.setWantedQuantity(
                props.cartItems,
                props.item,
                ~~event.target.value
              )
            )
          }}
        >
          {quantityOptions}
        </select>
        <Spacer />
        <div className="flex flex-row items-center justify-center lg:w-full">
          <HeaderBar hrClassName="hidden flex-grow flex-shrink bg-blue h-0.5 border-none lg:block" />
          <span className="text-3xl lg:pl-4">
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
