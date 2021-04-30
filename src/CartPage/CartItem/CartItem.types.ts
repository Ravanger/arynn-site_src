import { MouseEventHandler } from "react"
import { Product } from "use-shopping-cart"

export interface CartItemType {
  item: Product
  removeCartItem: MouseEventHandler<HTMLButtonElement>
  quantityInCart: number
  setWantedQuantity: (sku: string, quantity: number) => void
}
