import ArtPage from "src/ArtPage"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { ART_ITEMS_MOCK_DATA } from "util/sampleData"

const Art = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Art" description="Arynn's art" url="/art" />
      <ArtPage artItems={props.artItems} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getArtItems = async () => {
    return ART_ITEMS_MOCK_DATA
  }

  const artItems = await getArtItems()

  return {
    props: { artItems },
    revalidate: 600,
  }
}

Art.getLayout = getLayout

export default Art