import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import CartPage from "src/CartPage"

const Shop = () => {
  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      <CartPage />
    </>
  )
}

Shop.getLayout = getLayout

export default Shop
