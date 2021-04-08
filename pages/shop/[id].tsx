import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ShopPiecePage from "src/ShopPage/ShopPiecePage"
import { getShopItems } from "util/dataFetching"
import { readCache, writeCache } from "util/cache"
import { Product, useShoppingCart } from "use-shopping-cart"
import { itemIdExistsInCart } from "util/stripe"

const ShopPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (props.errors) return <></>

  const { addItem, cartDetails } = useShoppingCart()
  const shopItem: Product = props.item

  return (
    <>
      <SEO
        title={"Shop: " + shopItem.title}
        description={`Arynn's Shop - ${shopItem.title}: ${shopItem.description}`}
        url={"/shop/" + shopItem.sku}
      />
      <ShopPiecePage
        item={shopItem}
        addToCartFunc={() =>
          !itemIdExistsInCart(cartDetails, shopItem.sku) && addItem(shopItem, 1)
        }
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const shopItems = await getShopItems()
    await writeCache(shopItems, ".shopCache")

    const paths = shopItems.map((item) => ({
      params: { id: item.sku },
    }))

    return { paths, fallback: false }
  } catch (err) {
    console.error("Error in ShopPiece.getStaticPaths: ", err)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    let shopItems: Product[] = await readCache(".shopCache")
    if (shopItems.length <= 0) {
      shopItems = await getShopItems()
      await writeCache(shopItems, ".shopCache")
    }

    const id = params?.id
    const item = id && shopItems.find((item) => item.sku === id)

    return id && item
      ? { props: { item } }
      : { props: { errors: "No item found" } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ShopPiece.getLayout = getLayout

export default ShopPiece
