import { CartDetails, Product } from "use-shopping-cart"

export interface CartPageType {
  cartItems: Product[]
  cartDetails: CartDetails
  cartCount: number
  totalPrice: number
  handleStripeCheckout: () => Promise<void>
  removeItem: (sku: string) => void
  stripeLoading: boolean
}
