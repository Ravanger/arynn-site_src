import { MouseEventHandler } from "react"
import { ShopItemType } from "src/ShopPage/ShopPage.types"

export interface CartItemType {
  item: ShopItemType
  removeCartItem: MouseEventHandler<HTMLButtonElement>
}
