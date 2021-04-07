import { Fragment } from "react"
import HeaderBar from "src/common/HeaderBar"
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
        <Fragment key={shopItem.title + index}>
          <HeaderBar hrClassName="border-15 md:hidden" />
          <ShopItemCard item={shopItem} />
        </Fragment>
      ))}
    </div>
  ) : (
    <></>
  )
}

export default ShopItems
