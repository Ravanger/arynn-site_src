export interface ShopItemType {
  title: string
  image: string
  price: string
  type: string
}

export interface ShopPageType {
  shopItems: ShopItemType[]
}
