import { Product } from "use-shopping-cart"
import { CustomProductType } from "util/data.types"

export interface CustomShopPropsType {
  customShopInfo: CustomProductType
  addToCartFunc: () => void
  setSelectedCustomAddons: React.Dispatch<
    React.SetStateAction<SelectedCustomAddons | null>
  >
  selectedCustomAddons: SelectedCustomAddons
  totalPrice: number
  quantityInCart: number
  customProductDetails: string
  setCustomProductDetails: React.Dispatch<React.SetStateAction<string>>
}

export interface SelectedCustomAddons {
  type: Product
  numberOfPeople: Product
  addons: Product[]
}
