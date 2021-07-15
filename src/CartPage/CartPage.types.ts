import { CartType } from "atoms/store.types"
import { CartDetails, Product } from "use-shopping-cart"

export interface CartPageType {
  cartItems: Product[]
  cartDetails: CartDetails
  totalPrice: number
  handleStripeCheckout: () => Promise<void>
  removeItem: (productArray: Product[], product: Product) => Product[]
  setCartInfo: (update: React.SetStateAction<CartType>) => void
  setWantedQuantity: (sku: string, quantity: number) => void
  stripeLoading: boolean
}
