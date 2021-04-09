import { MouseEventHandler } from "react"
import { Product } from "use-shopping-cart"

export interface CartPageType {
  cartItems: Product[]
  cartCount: number
  totalPrice: number
  handleCheckout: MouseEventHandler<HTMLButtonElement>
  removeItem: (sku: string) => void
}
