import ShopItemCard from "./ShopItemCard"
import { ShopItemProps } from "./ShopItems.types"

const ShopItems = (props: ShopItemProps) => {
  if (!props.shopItems) return <></>

  const currentShopItems = props.shopFilter
    ? props.shopItems.filter(
        (item) => item.type.toUpperCase() === props.shopFilter.toUpperCase()
      )
    : props.shopItems

  return currentShopItems ? (
    <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {currentShopItems.map((shopItem, index) => (
        <ShopItemCard
          key={shopItem.title + index}
          id={shopItem.id}
          title={shopItem.title}
          price={shopItem.price}
          image={shopItem.image}
        />
      ))}
    </div>
  ) : (
    <></>
  )
}

export default ShopItems
