import Link from "next/link"
import Spacer from "src/common/Spacer"
import { useShoppingCart } from "use-shopping-cart"

const SuccessPage = () => {
  useShoppingCart().clearCart()

  return (
    <>
      <h2>Thank you for your order!</h2>
      <Spacer size="2rem" />
      <Link href="/shop" scroll={false}>
        <a className="text-pink hover:text-blue">Back to shop</a>
      </Link>
    </>
  )
}

export default SuccessPage
