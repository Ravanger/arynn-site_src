import ShopItemCard from "./ShopItemCard"
import { DivShopItems } from "./ShopItems.styles"
import { ShopItemProps } from "./ShopItems.types"

const ShopItems = (props: ShopItemProps) => {
  const currentShopItems = props.shopFilter
    ? props.shopItems.filter((item) => item.type === props.shopFilter)
    : props.shopItems

  return (
    <DivShopItems>
      {currentShopItems.map((shopItem, index) => (
        <ShopItemCard
          key={shopItem.title + index}
          title={shopItem.title}
          price={shopItem.price}
          image={shopItem.image}
        />
      ))}
    </DivShopItems>
  )
}

ShopItems.defaultProps = {
  shopFilter: "",
}

export default ShopItems
