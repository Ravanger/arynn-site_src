import { MouseEventHandler } from "react"
import { Product } from "use-shopping-cart"

export interface ShopPiecePageTypes {
  item: Product
  addToCartFunc: () => void
  isInCart: boolean
}
