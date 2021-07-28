import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { useAtom } from "jotai"
import { screenWidthAtom, shopFilterAtom } from "atoms/store"
import { useClickOutside } from "util/clickHandlers"
import { useRef, useState } from "react"
import { readFile, writeFile } from "util/cache"
import { CustomProductType } from "util/data.types"

const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [screenWidth] = useAtom(screenWidthAtom)

  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)
  const shopMenuRef = useRef(null)
  useClickOutside(shopMenuRef, () => setIsShopMenuOpen(false))

  if (props.errors || !props.shopItems) return <></>

  if (props.shopItems.length <= 0) return <></>

  // Filter out all addon items (no product_data)
  const filteredShopItems = props.shopItems.filter(
    (item: CustomProductType) => item.product_data
  )

  const SHOP_FILTERS = [
    "",
    "Prints",
    "Stickers",
    "Goods",
    "Custom",
    "Originals",
  ]

  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage
        shopItems={filteredShopItems}
        shopFilter={shopFilter}
        isShopMenuOpen={isShopMenuOpen}
        shopMenuRef={shopMenuRef}
        setShopFilter={setShopFilter}
        setIsShopMenuOpen={setIsShopMenuOpen}
        shopFiltersList={SHOP_FILTERS}
        isMobile={screenWidth < 1024}
      />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    let shopItems: CustomProductType[] = await readFile(".shopCache")
    if (!shopItems || shopItems.length < 1) {
      shopItems = await getShopItems()
      await writeFile(shopItems, ".shopCache")
    }

    return {
      props: { shopItems },
    }
  } catch (err) {
    console.error("Error in Shop.getStaticProps: ", err)
    return { props: { errors: err } }
  }
}

Shop.getLayout = getLayout

export default Shop
