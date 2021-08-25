import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SuccessPage from "src/SuccessPage"
import { useShoppingCart } from "use-shopping-cart"
import emailjs from "emailjs-com"
import toast from "react-hot-toast"
import Spinner from "src/common/Spinner"

const Success = () => {
  const { clearCart } = useShoppingCart()
  const [cartItems, setCartItems] = useAtom(cartAtom)
  const [orderedItems] = useState([...cartItems])
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState({ status: 0, text: "" })

  // Send email and clear cart
  useEffect(() => {
    if (isLoading || cartItems.length <= 0) return

    const clearAllCarts = () => {
      const emptyCart = cartItems
      emptyCart.length = 0
      setCartItems(emptyCart)
      clearCart()
    }

    setIsLoading(true)

    let productsString = ""

    cartItems.forEach((item, index) => {
      productsString += `<p><b><u>Product #${index + 1}: </u></b></p>`
      productsString += `<p>Title: <i>${item.name}</i></p>`
      productsString += `<p>SKU: <i>${item.sku}</i></p>`
      productsString += `<p>Quantity: <i>${item.quantity}</i></p>`

      const selectedCustomAddons = item.customData?.selectedAddons
      if (selectedCustomAddons) {
        productsString += `<br />`
        productsString += `<p><b>Custom addons: </b></p>`
        productsString += `<p>Type: <i>${selectedCustomAddons.type.name}</i></p>`
        productsString += `<p>Number of people: <i>${selectedCustomAddons.numberOfPeople.name}</i></p>`
        selectedCustomAddons.addons.forEach((addon) => {
          productsString += `<p>Addon: <i>${addon.name}</i></p>`
        })
      }

      productsString += `<br />`
      productsString += `<hr />`
      productsString += `<br />`
    })

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_ORDER_TEMPLATE_ID!,
        { products: productsString }
      )
      .then((response) => {
        setResponse({ status: response.status, text: response.text })
        clearAllCarts()
        setIsLoading(false)
      })
      .catch((err) => {
        setResponse({ status: err.status, text: err.text })
        clearAllCarts()
        setIsLoading(false)
        console.error(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    response.text && response.status === 400
      ? toast.error("Error. Please try again.")
      : response.status === 200
      ? toast.success("Thank you!")
      : null
  }, [response])

  return isLoading ? (
    <div className="w-full flex justify-center">
      <Spinner />
    </div>
  ) : (
    <>
      <SEO
        title="Thank you!"
        description="Thank you for your order"
        url="/success"
      />
      <SuccessPage orderedItems={orderedItems} />
    </>
  )
}

Success.getLayout = getLayout

export default Success
