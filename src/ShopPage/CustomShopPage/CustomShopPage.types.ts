import { Product } from "use-shopping-cart"
import { CustomProductType, ExtendedOptionsProductType } from "util/data.types"

export interface CustomShopPropsType {
  customShopInfo: CustomProductType
  addToCartFunc: () => void
  setSelectedCustomAddons: React.Dispatch<
    React.SetStateAction<SelectedCustomAddons>
  >
  selectedCustomAddons: SelectedCustomAddons
  totalPrice: number
  quantityInCart: number
  customProductDetails: string
  setCustomProductDetails: React.Dispatch<React.SetStateAction<string>>
}

export interface SelectedCustomAddons {
  type?: ExtendedOptionsProductType
  extended_option?: Product
  addons?: Product[]
}
