import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import CustomShopPage from "src/ShopPage/CustomShopPage"
import { InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { readFile, writeFile } from "util/cache"
import { useState, useEffect, useMemo } from "react"
import { useAtom } from "jotai"
import { cartAtom } from "atoms/store"
import { addProductToCart, getCustomProductQuantityInCart } from "util/cart"
import { CustomProductType } from "util/data.types"
import toast from "react-hot-toast"
import { SelectedCustomAddons } from "src/ShopPage/CustomShopPage/CustomShopPage.types"

const Custom = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [cartItems, setCartItems] = useAtom(cartAtom)
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [selectedCustomAddons, setSelectedCustomAddons] =
    useState<SelectedCustomAddons>({
      ...props.customShopInfo?.customData!.selectedAddons,
    })

  const [customProductDetails, setCustomProductDetails] = useState("")

  // Update quantity in cart
  useEffect(() => {
    if (!props.customShopInfo) return

    setQuantityInCart(
      getCustomProductQuantityInCart(cartItems, props.customShopInfo)
    )
  }, [cartItems, props.customShopInfo])

  // Update total price whenever addons change
  const totalPrice = useMemo(() => {
    try {
      const addonTotalPrice =
        selectedCustomAddons.type!.price +
        selectedCustomAddons.extended_option!.price +
        selectedCustomAddons.addons!.reduce(
          (total, addonItem) => total + addonItem.price,
          0
        )

      return props.customShopInfo!.price + addonTotalPrice
    } catch (error) {
      console.error(error)
      return 0
    }
  }, [props.customShopInfo, selectedCustomAddons])

  if (props.errors || !props.customShopInfo || !selectedCustomAddons)
    return <></>

  return (
    <>
      <SEO
        title="Custom Commission"
        description="Got something special in mind? Let me know and I'll make it for you!"
        url="/shop/custom"
      />
      <CustomShopPage
        customShopInfo={props.customShopInfo}
        addToCartFunc={() => {
          if (
            !props.customShopInfo ||
            !props.customShopInfo.customData ||
            !selectedCustomAddons ||
            !selectedCustomAddons.type ||
            !selectedCustomAddons.extended_option ||
            !selectedCustomAddons.addons
          )
            return

          const customProduct: CustomProductType = {
            ...props.customShopInfo,
            customData: {
              ...props.customShopInfo.customData,
              selectedAddons: {
                type: selectedCustomAddons.type,
                extended_option: selectedCustomAddons.extended_option,
                addons: selectedCustomAddons.addons,
              },
              customMessage: customProductDetails,
            },
          }

          const updatedArray = addProductToCart(cartItems, customProduct)
          setCartItems(updatedArray)
          toast.success("Added to cart!")

          //Reset inputs
          setSelectedCustomAddons({
            type: props.customShopInfo.customData!.availableAddons.types[0],
            extended_option:
              props.customShopInfo.customData!.availableAddons.types[0]
                .extended_options[0],
            addons: [],
          })
          setCustomProductDetails("")
        }}
        totalPrice={totalPrice}
        quantityInCart={quantityInCart}
        setSelectedCustomAddons={setSelectedCustomAddons}
        selectedCustomAddons={selectedCustomAddons}
        customProductDetails={customProductDetails}
        setCustomProductDetails={setCustomProductDetails}
      />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    let shopItems: CustomProductType[] = await readFile(".shopCache")
    if (shopItems.length <= 0) {
      shopItems = await getShopItems()
      await writeFile(shopItems, ".shopCache")
    }

    const customShopInfo = shopItems.find((item) => {
      return item.product_data?.metadata.type.toUpperCase() === "CUSTOM"
    })

    return {
      props: { customShopInfo: customShopInfo },
    }
  } catch (err) {
    console.error("Error in Custom.getStaticProps: ", err)
    return { props: { errors: err } }
  }
}

Custom.getLayout = getLayout

export default Custom
