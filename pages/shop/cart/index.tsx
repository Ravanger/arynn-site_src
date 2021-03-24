import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"

const Shop = () => {
  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      This is the cart page
    </>
  )
}

Shop.getLayout = getLayout

export default Shop
