import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SuccessPage from "src/SuccessPage"
import { useShoppingCart } from "use-shopping-cart"

const Success = () => {
  return (
    <>
      <SEO
        title="Thank you!"
        description="Thank you for your order"
        url="/success"
      />
      <SuccessPage clearCart={() => useShoppingCart().clearCart()} />
    </>
  )
}

Success.getLayout = getLayout

export default Success
