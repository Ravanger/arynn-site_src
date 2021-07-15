import { CartDetails, Product } from "use-shopping-cart"

export interface CartPageType {
  cartItems: Product[]
  totalPrice: number
  handleStripeCheckout: () => Promise<void>
  setCartItems: (update: React.SetStateAction<Product[]>) => void
  stripeLoading: boolean
}
