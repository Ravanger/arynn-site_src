import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import CustomShopPage from "src/ShopPage/CustomShopPage"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { Product, useShoppingCart } from "use-shopping-cart"
import { readFile, writeFile } from "util/cache"
import { useState, useEffect } from "react"
import { SelectedCustomAddons } from "src/ShopPage/CustomShopPage/CustomShopPage.types"
import { v4 as uuidv4 } from "uuid"

const Custom = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { addItem } = useShoppingCart()
  const [totalPrice, setTotalPrice] = useState<number>(
    props.customShopInfo.price
  )
  const [selectedCustomAddons, setSelectedCustomAddons] =
    useState<SelectedCustomAddons>({
      type: props.customShopInfo.customAddons.types[0],
      numberOfPeople: props.customShopInfo.customAddons.numberOfPeople[0],
      addons: [],
    })

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

  const addItemsWithCustomIds = (customId: string) => {
    const baseItemWithId = { ...props.customShopInfo }
    baseItemWithId.customId = customId

    const typesWithId = { ...selectedCustomAddons.type }
    typesWithId.customId = customId

    const numberOfPeopleWithId = { ...selectedCustomAddons.numberOfPeople }
    numberOfPeopleWithId.customId = customId

    const addonsWithId = [...selectedCustomAddons.addons]
    addonsWithId.forEach((addonItem) => {
      addonItem.customId = customId
    })

    addItem(baseItemWithId)
    addItem(typesWithId)
    addItem(numberOfPeopleWithId)
    addonsWithId.forEach((addonItem) => {
      addItem(addonItem)
    })
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
          const customId = uuidv4()
          addItemsWithCustomIds(customId)
        }}
        totalPrice={totalPrice}
        setSelectedCustomAddons={setSelectedCustomAddons}
        selectedCustomAddons={selectedCustomAddons}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    let shopItems: Product[] = await readFile(".shopCache")
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
