import { MouseEventHandler } from "react"
import { Product } from "use-shopping-cart"

export interface CartItemType {
  item: Product
  cartItems: Product[]
  setCartItems: (update: React.SetStateAction<Product[]>) => void
  removeCartItem: MouseEventHandler<HTMLButtonElement>
  quantityInCart: number
  setWantedQuantity: (
    productArray: Product[],
    product: Product,
    quantity: number
  ) => Product[]
}
