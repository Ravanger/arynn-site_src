import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ShopPiecePage from "src/ShopPage/ShopPiecePage"
import { getShopItems } from "util/dataFetching"
import { readCache, writeCache } from "util/cache"
import { shopCartAtom } from "atoms/store"
import { useAtom } from "jotai"

const ShopPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (props.errors) return <></>

  const [, shopCartDispatch] = useAtom(shopCartAtom)

  return (
    <>
      <SEO
        title={"Shop: " + props.item.title}
        description={`Arynn's Shop - ${props.item.title}: ${props.item.description}`}
        url={"/shop/" + props.item.id}
      />
      <ShopPiecePage
        item={props.item}
        addToCartFunc={() => {
          shopCartDispatch({ type: "ADD", payload: props.item })
        }}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const shopItems = await getShopItems()
    await writeCache(shopItems, ".shopCache")

    const paths = shopItems.map((item) => ({
      params: { id: item.id },
    }))

    return { paths, fallback: false }
  } catch (err) {
    console.error("Error in ShopPiece.getStaticPaths: ", err)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const shopItems = await readCache(".shopCache")

    const id = params?.id
    const item = id && shopItems.find((item) => item.id === id)

    return id && item
      ? { props: { item } }
      : { props: { errors: "No item found" } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ShopPiece.getLayout = getLayout

export default ShopPiece
