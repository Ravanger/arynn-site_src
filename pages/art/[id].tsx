import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ART_ITEMS_MOCK_DATA } from "util/sampleData"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ArtPiecePage from "src/ArtPage/ArtPiecePage"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { readCache, writeCache } from "util/cache"
import { useRouter } from "next/router"

const getArtItemIndexById = (
  id: string | string[],
  itemsArray: ArtItemType[]
) => {
  return itemsArray.findIndex((item) => item.id === id)
}

const getPrevandNextArtItemId = (
  artItem: ArtItemType,
  itemsArray: ArtItemType[],
  displayAll: boolean
) => {
  let prevItemId = "-1"
  let nextItemId = "-1"

  const filteredArray = displayAll
    ? itemsArray
    : itemsArray.filter((item) => item.type === artItem.type)

  const arrLength = filteredArray.length
  const itemIndex = filteredArray.findIndex((item) => item.id === artItem.id)

  if (itemIndex !== -1) {
    prevItemId = filteredArray[(itemIndex + arrLength - 1) % arrLength].id
    nextItemId = filteredArray[(itemIndex + 1) % arrLength].id
  }

  return { prevItemId, nextItemId }
}

// TODO: Errors

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const displayAll = router.query.display === "all"

  if (props.errors) return <></>

  const item: ArtItemType =
    props.id &&
    props.itemsArray[getArtItemIndexById(props.id, props.itemsArray)]
  if (!item || !item.title) throw new Error("Item not found")

  const { prevItemId, nextItemId } = getPrevandNextArtItemId(
    item,
    props.itemsArray,
    displayAll
  )

  return (
    <>
      <SEO
        title={"Art: " + item.title}
        description={`Arynn's art - ${item.title}: ${item.description}`}
        url={"/art/" + item.id}
      />
      <ArtPiecePage
        item={item}
        prevItemId={prevItemId}
        nextItemId={nextItemId}
        displayAll={displayAll}
      />
    </>
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
  try {
    const itemsArray = await readCache(".artcache")
    const id = context.params?.id

    return {
      props: {
        itemsArray,
        id,
      },
      revalidate: 600,
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ArtPiece.getLayout = getLayout

export default ArtPiece
