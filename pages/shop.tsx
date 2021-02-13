import ShopPage from "src/ShopPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"

export const Shop: PageWithLayoutType = () => {
  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage />
    </>
  )
}

Shop.getLayout = getLayout

export default Shop
