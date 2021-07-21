import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import CustomShopPage from "src/ShopPage/CustomShopPage"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { readFile, writeFile } from "util/cache"
import { useState, useEffect } from "react"
import { SelectedCustomAddons } from "src/ShopPage/CustomShopPage/CustomShopPage.types"
import { v4 as uuidv4 } from "uuid"
import { useAtom } from "jotai"
import { cartAtom } from "atoms/store"
import { addProductToCart } from "util/cart"
import { CustomProductType } from "util/data.types"

const Custom = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [cartItems, setCartItems] = useAtom(cartAtom)
  const [totalPrice, setTotalPrice] = useState<number>(
    props.customShopInfo.price
  )
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [selectedCustomAddons, setSelectedCustomAddons] =
    useState<SelectedCustomAddons>({
      type: props.customShopInfo.customData.availableAddons.types[0],
      numberOfPeople: props.customShopInfo.customData.availableAddons.numberOfPeople[0],
      addons: [],
    })

  // Update total price whenever addons change
  useEffect(() => {
    const addonTotalPrice =
      selectedCustomAddons.type.price +
      selectedCustomAddons.numberOfPeople.price +
      selectedCustomAddons.addons.reduce(
        (total, addonItem) => total + addonItem.price,
        0
      )
    setTotalPrice(props.customShopInfo.price + addonTotalPrice)
  }, [props.customShopInfo, selectedCustomAddons])

  if (props.errors || !props.customShopInfo) return <></>

  const addItemsWithCustomIds = () => {
    const customId = uuidv4()

    const baseItemWithId: CustomProductType = { ...props.customShopInfo }
    baseItemWithId.customId = customId

    baseItemWithId.selectedAddons = {
      type: selectedCustomAddons.type,
      numberOfPeople: selectedCustomAddons.numberOfPeople,
      addons: selectedCustomAddons.addons,
    }

    setCartItems(addProductToCart(cartItems, baseItemWithId))
  }

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
          addItemsWithCustomIds()
        }}
        totalPrice={totalPrice}
        quantityInCart={quantityInCart}
        setSelectedCustomAddons={setSelectedCustomAddons}
        selectedCustomAddons={selectedCustomAddons}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
    return { props: { errors: err.message } }
  }
}

Custom.getLayout = getLayout

export default Custom
