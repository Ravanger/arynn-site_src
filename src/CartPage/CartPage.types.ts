import { Product } from "use-shopping-cart"

export interface CartPageType {
  cartItems: Product[]
  cartCount: number
  totalPrice: number
  handleStripeCheckout: () => Promise<void>
  removeItem: (sku: string) => void
}
