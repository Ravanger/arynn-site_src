import Image from "next/image"
import { CartItemBaseType } from "./CartItem.types"
import { FaWindowClose } from "react-icons/fa"
import Spacer from "src/common/Spacer"
import Link from "next/link"
import { motion } from "framer-motion"

const CartItemBase = (props: CartItemBaseType) => {
  const linkToUrl = `/shop/${props.isCustom ? "custom" : props.item.sku}`

  return (
    <>
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
      <Link href={linkToUrl}>
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
      <Link href={linkToUrl}>
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
    </>
  )
}

CartItemBase.defaultProps = {
  isCustom: false,
}

export default CartItemBase
