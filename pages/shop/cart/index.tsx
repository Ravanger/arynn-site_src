import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import CartPage from "src/CartPage"
import { useShoppingCart } from "use-shopping-cart"
import Stripe from "stripe"
import { CustomProductType, ErrorResponseType } from "util/data.types"
import { fetchData } from "util/dataFetching"
import { useMemo, useState, useEffect } from "react"
import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"
import toast from "react-hot-toast"
import { getProductBySku } from "util/cart"

const Cart = () => {
  const [stripeLoading, setStripeLoading] = useState(false)
  const [cartItems, setCartItems] = useAtom(cartAtom)

  const { addItem, clearCart, redirectToCheckout, cartDetails } =
    useShoppingCart()

  useEffect(() => {
    clearCart()
    if (cartItems.length <= 0) return

    // Clear cart and add all items to use-shopping-cart
    setStripeLoading(true)

    // Flatten product array so that addons are on first level
    try {
      const flattenedProductsArray: CustomProductType[] = []
      cartItems.forEach((item) => {
        console.log(item)

        flattenedProductsArray.push(item)

        // Add addons to cart as well
        const isCustomProduct =
          item.product_data?.metadata.type.toUpperCase() === "CUSTOM"
        if (isCustomProduct) {
          flattenedProductsArray.push(item.customData!.selectedAddons.type)
          flattenedProductsArray.push(
            item.customData!.selectedAddons.extended_option
          )
          item.customData!.selectedAddons.addons.forEach((addon) => {
            flattenedProductsArray.push(addon)
          })
        }
      })

      // Duplicates map
      const skuDuplicates = Array.from(
        flattenedProductsArray.reduce(
          (acc, item) => acc.set(item.sku, (acc.get(item.sku) || 0) + 1),
          new Map()
        )
      ).map(([sku, quantity]) => ({
        sku,
        quantity,
      }))

      // Add products to use-shopping-cart
      skuDuplicates.forEach((mapItem) => {
        const product = getProductBySku(mapItem.sku, cartItems)
        product &&
          addItem(product, Math.max(mapItem.quantity, product.quantity || 1))
      })
    } catch (error) {
      console.error(error)
      setCartItems([])
      clearCart()
    }

    setStripeLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  const handleStripeCheckout = async () => {
    if (cartItems.length <= 0 || stripeLoading) return

    setStripeLoading(true)

    // Confirm data and get sessionId
    const response: Stripe.Checkout.Session & ErrorResponseType =
      await fetchData("/api/checkout", cartDetails)

    if (response.statusCode === 500) {
      console.error(response)
      toast.error(response.message)
      setStripeLoading(false)
      if (response.message.includes("not found")) {
        const emptyCart = cartItems
        emptyCart.length = 0
        setCartItems(emptyCart)
        clearCart()
        toast.error("Please try again")
      }
      return
    }

    const error = await redirectToCheckout({ sessionId: response.id })
    if (error) {
      console.error(error)
      toast.error(error.message)
    }

    setStripeLoading(false)
  }

  const totalPrice = useMemo(() => {
    try {
      return cartItems.reduce((total, item) => {
        const isValidCustomProduct =
          item.customData &&
          item.customData.selectedAddons &&
          item.customData.selectedAddons.type &&
          item.customData.selectedAddons.extended_option &&
          item.customData.selectedAddons.addons

        return (total +=
          item.price * (item.quantity || 1) +
          (isValidCustomProduct
            ? item.customData!.selectedAddons.extended_option.price +
              item.customData!.selectedAddons.type.price +
              item.customData!.selectedAddons.addons.reduce(
                (addonTotal, addonItem) => {
                  return (addonTotal += addonItem.price)
                },
                0
              )
            : 0))
      }, 0)
    } catch (error) {
      console.error(error)
      return 0
    }
  }, [cartItems])

  return (
    <>
      <SEO title="Cart" description="Arynn's Shop - Cart" url="/shop/cart" />
      <CartPage
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleStripeCheckout={handleStripeCheckout}
        setCartItems={setCartItems}
        stripeLoading={stripeLoading}
      />
    </>
  )
}

Cart.getLayout = getLayout

export default Cart
