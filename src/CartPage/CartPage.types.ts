import { CustomProductType } from "util/data.types"

export interface CartPageType {
  cartItems: CustomProductType[]
  totalPrice: number
  handleStripeCheckout: () => Promise<void>
  setCartItems: (update: React.SetStateAction<CustomProductType[]>) => void
  stripeLoading: boolean
}
