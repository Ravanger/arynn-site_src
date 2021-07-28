import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"
import { useEffect } from "react"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SuccessPage from "src/SuccessPage"
import { useShoppingCart } from "use-shopping-cart"

const Success = () => {
  const { clearCart } = useShoppingCart()
  const [cartItems, setCartItems] = useAtom(cartAtom)

  useEffect(() => {
    const emptyCart = cartItems
    emptyCart.length = 0
    setCartItems(emptyCart)
    clearCart()
  }, [clearCart, cartItems, setCartItems])

  return (
    <>
      <SEO
        title="Thank you!"
        description="Thank you for your order"
        url="/success"
      />
      <SuccessPage />
    </>
  )
}

Success.getLayout = getLayout

export default Success
