import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ART_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ArtPiecePage from "src/ArtPage/ArtPiecePage"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { readCache, writeCache } from "util/cache"

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    !props.errors && (
      <>
        <SEO
          title={"Art: " + props.item.title}
          description={`Arynn's art - ${props.item.title}: ${props.item.description}`}
          url={"/art/" + props.item.id}
        />
        <ArtPiecePage
          item={props.item}
          prevItemId={props.prevItemId}
          nextItemId={props.nextItemId}
        />
      </>
    )
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getArtItems = async () => {
    return ART_ITEMS_MOCK_DATA
  }

  const artItems = await getArtItems()

  await writeCache(artItems, ".artcache")

  const paths = artItems.map((item) => ({
    params: { id: item.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const getArtItemIndexById = (
    id: string | string[],
    itemsArray: ArtItemType[]
  ) => {
    return itemsArray.findIndex((item) => item.id === id)
  }

  const getPrevandNextArtItemId = (
    artItem: ArtItemType,
    itemsArray: ArtItemType[]
  ) => {
    let prevItemId = "-1"
    let nextItemId = "-1"

    const arrLength = itemsArray.length
    const itemIndex = itemsArray.findIndex((item) => item.id === artItem.id)

    if (itemIndex !== -1) {
      prevItemId = itemsArray[(itemIndex + arrLength - 1) % arrLength].id
      nextItemId = itemsArray[(itemIndex + 1) % arrLength].id
    }

    return { prevItemId, nextItemId }
  }

  try {
    const itemsArray = await readCache(".artcache")
    const id = context.params?.id
    const item = id && itemsArray[getArtItemIndexById(id, itemsArray)]
    if (!item) throw new Error("Item not found")

    const { prevItemId, nextItemId } = getPrevandNextArtItemId(item, itemsArray)

    return {
      props: {
        item,
        nextItemId,
        prevItemId,
      },
      revalidate: 600,
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ArtPiece.getLayout = getLayout

export default ArtPiece
