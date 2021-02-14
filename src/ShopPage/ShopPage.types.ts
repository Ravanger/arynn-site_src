export interface ShopItem {
  title: string
  image: string
  price: string
  type: string
}

export interface ShopPageType {
  shopItems: ShopItem[]
}
