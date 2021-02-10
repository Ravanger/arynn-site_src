import Image from "next/image"
import Spacer from "src/common/Spacer"
import { DivShopItemCard } from "./ShopItemCard.styles"
import { ShopItemCardProps } from "./ShopItemCard.types"

const ShopItemCard = (props: ShopItemCardProps) => {
  return (
    <DivShopItemCard>
      <Image
        src={props.image}
        alt={props.title}
        layout="responsive"
        width={800}
        height={800}
        objectFit="cover"
      />
      <Spacer size="1rem" />
      <div>{props.title}</div>
      <Spacer size="1rem" />
      <div>
        <span>${props.price}</span>
      </div>
    </DivShopItemCard>
  )
}
export default ShopItemCard
