import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { useClickOutside } from "util/clickHandlers"
import { useRef, useState } from "react"
import { readFile, writeFile } from "util/cache"
import { Product } from "use-shopping-cart"

const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (props.errors || !props.shopItems) return <></>

  const shopItems: Product[] = props.shopItems
  if (shopItems.length <= 0) return <></>

  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)
  const shopMenuRef = useRef(null)
  useClickOutside(shopMenuRef, () => setIsShopMenuOpen(false))

  const SHOP_FILTERS = ["", "Prints", "Stickers", "Custom", "Originals"]

  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage
        shopItems={shopItems}
        shopFilter={shopFilter}
        isShopMenuOpen={isShopMenuOpen}
        shopMenuRef={shopMenuRef}
        setShopFilter={setShopFilter}
        setIsShopMenuOpen={setIsShopMenuOpen}
        shopFiltersList={SHOP_FILTERS}
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

    return {
      props: { shopItems },
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

Shop.getLayout = getLayout

export default Shop
