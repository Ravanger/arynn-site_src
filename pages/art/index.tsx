import ArtPage from "src/ArtPage"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getArtItems } from "util/dataFetching"
import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import { ArtItemType } from "src/ArtPage/ArtPage.types"

const Art = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [artFilter] = useAtom(artFilterAtom)
  const artItems: ArtItemType[] = props.artItems

  return (
    <>
      <SEO title="Art" description="Arynn's art" url="/art" />
      <ArtPage artItems={artItems} artFilter={artFilter} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const artItems = await getArtItems()

    return {
      props: { artItems },
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

Art.getLayout = getLayout

export default Art
