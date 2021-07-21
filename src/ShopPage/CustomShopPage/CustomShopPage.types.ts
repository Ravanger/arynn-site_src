import { Product } from "use-shopping-cart"
import { CustomProductType } from "util/data.types";

export interface CustomShopPropsType {
  customShopInfo: CustomProductType
  addToCartFunc: () => void
  setSelectedCustomAddons: React.Dispatch<
    React.SetStateAction<SelectedCustomAddons>
  >
  selectedCustomAddons: SelectedCustomAddons
  totalPrice: number
}

export interface SelectedCustomAddons {
  type: Product
  numberOfPeople: Product
  addons: Product[]
}
