import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { SHOP_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ShopPiecePage from "src/ShopPage/ShopPiecePage"

const ShopPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    !props.errors && (
      <>
        <SEO
          title={"Shop: " + props.item.title}
          description={`Arynn's Shop - ${props.item.title}: ${props.item.description}`}
          url={"/shop/" + props.item.id}
        />
        <ShopPiecePage item={props.item} quantity={3} />
      </>
    )
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getArtItems = async () => {
    return SHOP_ITEMS_MOCK_DATA
  }

  const artItems = await getArtItems()

  const paths = artItems.map((item) => ({
    params: { id: item.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getArtItemById = async (id: string | string[]) => {
    return SHOP_ITEMS_MOCK_DATA.find((item) => item.id === id)
  }

  try {
    const id = params?.id
    const item = id && (await getArtItemById(id))

    return id && item
      ? { props: { item }, revalidate: 600 }
      : { props: { errors: "No ID found" } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ShopPiece.getLayout = getLayout

export default ShopPiece
