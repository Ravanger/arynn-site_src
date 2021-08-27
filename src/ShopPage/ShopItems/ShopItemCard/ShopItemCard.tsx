import { motion } from "framer-motion"
import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { ShopItemCardProps } from "./ShopItemCard.types"

const ShopItemCard = (props: ShopItemCardProps) => {
  const isCustomType =
    props.item.product_data?.metadata.type.toUpperCase() === "CUSTOM"

  const displayPrice = isCustomType
    ? props.item.customData!.availableAddons.types[0].price
    : props.item.price

  return (
    <Link href={`/shop/${isCustomType ? "custom" : props.item.sku}`}>
      <a>
        <motion.div
          className="group text-center text-xl font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05 }}
        >
          <ResponsiveImage src={props.item.image} alt={props.item.name} />
          <Spacer size="1rem" />
          <h2 className="group-hover:text-pink">{props.item.name}</h2>
          <Spacer size="1rem" />
          <h3 className="text-pink">
            {`${formatCurrencyString({
              value: displayPrice,
              currency: CURRENCY,
            })}${isCustomType ? "+" : ""}`}
          </h3>
        </motion.div>
      </a>
    </Link>
  )
}
export default ShopItemCard
