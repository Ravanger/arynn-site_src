import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ART_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ArtPiecePage from "src/ArtPage/ArtPiecePage"

// TODO: Add Pagination arrows

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    !props.errors && (
      <>
        <SEO
          title={"Art: " + props.item.title}
          description={`Arynn's art - ${props.item.title}: ${props.item.description}`}
          url={"/art/" + props.item.id}
        />
        <ArtPiecePage item={props.item} />
      </>
    )
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

ArtPiece.getLayout = getLayout

export default ArtPiece
