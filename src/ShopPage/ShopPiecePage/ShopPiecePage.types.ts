import { Dispatch, SetStateAction } from "react"
import { Product } from "use-shopping-cart"

export interface ShopPiecePageTypes {
  item: Product
  addToCartFunc: () => void
  quantityInCart: number
  setWantedQuantity: Dispatch<SetStateAction<number>>
  wantedQuantity: number
}
