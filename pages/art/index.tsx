import ArtPage from "src/ArtPage"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import { InferGetStaticPropsType } from "next"
import { getArtItems } from "util/dataFetching"
import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { readFile, writeFile } from "util/cache"

const Art = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [artFilter] = useAtom(artFilterAtom)

  if (props.errors || !props.artItems) return <></>

  return (
    <>
      <SEO title="Art" description="Arynn's art" url="/art" />
      <ArtPage artItems={props.artItems} artFilter={artFilter} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    let artItems: ArtItemType[] = await readFile(".artcache")
    if (artItems.length <= 0) {
      artItems = await getArtItems()
      await writeFile(artItems, ".artcache")
    }

    return {
      props: { artItems },
    }
  } catch (err) {
    console.error("Error in Art.getStaticProps: ", err)
    return { props: { errors: err } }
  }
}

Art.getLayout = getLayout

export default Art
