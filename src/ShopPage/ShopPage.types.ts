export interface ShopItemType {
  id: string
  title: string
  image: string
  price: string
  type: string
  description: string
}

export interface ShopPageType {
  shopItems: ShopItemType[]
}
