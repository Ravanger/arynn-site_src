import Spacer from "src/common/Spacer"
import ShopItemCard from "./ShopItemCard"
import { ShopItemProps } from "./ShopItems.types"

const ShopItems = (props: ShopItemProps) => {
  if (!props.shopItems) return <></>

  const currentShopItems = props.shopFilter
    ? props.shopItems.filter(
        (item) =>
          item.product_data.metadata.type.toUpperCase() ===
          props.shopFilter.toUpperCase()
      )
    : props.shopItems

  return currentShopItems ? (
    <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {currentShopItems.map((shopItem, index) => (
        <div key={shopItem.name + index}>
          <Spacer size="2rem" className="md:hidden" />
          <ShopItemCard item={shopItem} />
        </div>
      ))}
      <Spacer />
    </div>
  ) : (
    <></>
  )
}

export default ShopItems
