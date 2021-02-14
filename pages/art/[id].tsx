import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ART_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import HeaderBar from "src/common/HeaderBar"
import Image from "next/image"
import Spacer from "src/common/Spacer"

const ArtPiecePage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <>
      <HeaderBar>{props.item.type}</HeaderBar>
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
      <HeaderBar>{props.item.title}</HeaderBar>
      <Spacer size="2rem" />
      <p>{props.item.description}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getArtItems = async () => {
    return ART_ITEMS_MOCK_DATA
  }

  const artItems = await getArtItems()

  const paths = artItems.map((item) => ({
    params: { id: item.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getArtItemById = async (id: string | string[]) => {
    return ART_ITEMS_MOCK_DATA.find((item) => item.id === id)
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

ArtPiecePage.getLayout = getLayout

export default ArtPiecePage
