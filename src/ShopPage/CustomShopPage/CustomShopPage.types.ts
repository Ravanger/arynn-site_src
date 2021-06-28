import { Product } from "use-shopping-cart"

export interface CustomShopPropsType {
  customShopInfo: Product
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
