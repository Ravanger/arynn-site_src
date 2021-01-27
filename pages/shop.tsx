import ShopPage from "src/ShopPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Shop: PageWithLayoutType = () => {
  return <ShopPage />
}

Shop.getLayout = getLayout

export default Shop
