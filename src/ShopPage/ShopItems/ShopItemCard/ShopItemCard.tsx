import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { DivShopItemCard } from "./ShopItemCard.styles"
import { ShopItemCardProps } from "./ShopItemCard.types"

const ShopItemCard = (props: ShopItemCardProps) => {
  return (
    <Link href={"/shop/" + props.id} scroll={false}>
      <a>
        <DivShopItemCard>
          <ResponsiveImage src={props.image} alt={props.title} />
          <Spacer size="1rem" />
          <div>{props.title}</div>
          <Spacer size="1rem" />
          <div>
            <span>${props.price}</span>
          </div>
        </DivShopItemCard>
      </a>
    </Link>
  )
}
export default ShopItemCard
