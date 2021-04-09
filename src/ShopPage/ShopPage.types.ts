import { Dispatch, MutableRefObject, SetStateAction } from "react"
import { Product } from "use-shopping-cart"

export interface ShopPageType {
  shopFiltersList: string[]
  shopItems: Product[]
  shopFilter: string
  isShopMenuOpen: boolean
  shopMenuRef: MutableRefObject<null>
  setShopFilter: (update: SetStateAction<string>) => void | Promise<void>
  setIsShopMenuOpen: Dispatch<SetStateAction<boolean>>
}
