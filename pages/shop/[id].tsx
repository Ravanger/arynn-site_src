import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { SHOP_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import HeaderBar from "src/common/HeaderBar"
import Image from "next/image"
import Spacer from "src/common/Spacer"
import SEO from "src/common/SEO"

const ShopPiecePage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <>
      <SEO
        title={"Shop: " + props.item.title}
        description={`Arynn's Shop - ${props.item.title}: ${props.item.description}`}
        url={"/shop/" + props.item.id}
      />
      <HeaderBar>{props.item.title}</HeaderBar>
      <Spacer size="2rem" />
      <div style={{ width: "100%" }}>
        <Image
          src={props.item.image}
          alt={props.item.title}
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
        />
      </div>
      <Spacer size="2rem" />
      <HeaderBar />
      <Spacer size="2rem" />
      <p>{props.item.description}</p>
      <div>
        <select name="quantity" id="quantity">
          <option value="quantity_text">- Quantity -</option>
          <option value="quantity_1">1</option>
          <option value="quantity_2">2</option>
          <option value="quantity_3">3</option>
        </select>
        <div>
          <span>${props.item.price}</span>
          <button>Continue</button>
        </div>
      </div>
    </>
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

ShopPiecePage.getLayout = getLayout

export default ShopPiecePage
