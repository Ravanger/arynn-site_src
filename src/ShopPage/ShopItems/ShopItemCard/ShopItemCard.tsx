import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { ShopItemCardProps } from "./ShopItemCard.types"

const ShopItemCard = (props: ShopItemCardProps) => {
  return (
    <Link href={"/shop/" + props.item.sku}>
      <a>
        <div className="group text-center text-xl font-bold">
          <ResponsiveImage src={props.item.image!} alt={props.item.name} />
          <Spacer size="1rem" />
          <h2 className="group-hover:text-pink animate-scaleExpandIn group-hover:animate-scaleExpandOut">
            {props.item.name}
          </h2>
          <Spacer size="1rem" />
          <h3 className="text-pink">
            {formatCurrencyString({
              value: props.item.price,
              currency: CURRENCY,
            })}
          </h3>
        </div>
      </a>
    </Link>
  )
}
export default ShopItemCard
