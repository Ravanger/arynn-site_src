import { MouseEventHandler } from "react"
import { ShopItemType } from "../ShopPage.types"

export interface ShopPiecePageTypes {
  item: ShopItemType
  addToCartFunc: MouseEventHandler<HTMLButtonElement>
}
