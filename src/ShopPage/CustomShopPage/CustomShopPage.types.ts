import { Dispatch, SetStateAction } from "react"
import { Product } from "use-shopping-cart"

export interface CustomShopPropsType {
  customShopPieces: Product[]
  selectedPiece: Product
  setSelectedPieceSku: Dispatch<SetStateAction<string>>
  addToCartFunc: () => void
  quantityInCart: number
}
