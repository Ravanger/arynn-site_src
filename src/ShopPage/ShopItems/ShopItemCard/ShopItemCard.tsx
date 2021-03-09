import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { ShopItemCardProps } from "./ShopItemCard.types"

const ShopItemCard = (props: ShopItemCardProps) => {
  return (
    <Link href={"/shop/" + props.id} scroll={false}>
      <a>
        <div className="group text-center text-xl font-bold">
          <ResponsiveImage src={props.image} alt={props.title} />
          <Spacer size="1rem" />
          <h2 className="group-hover:text-pink">{props.title}</h2>
          <Spacer size="1rem" />
          <h3 className="text-pink">${props.price}</h3>
        </div>
      </a>
    </Link>
  )
}
export default ShopItemCard
