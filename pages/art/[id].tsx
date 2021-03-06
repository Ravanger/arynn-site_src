import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ArtPiecePage from "src/ArtPage/ArtPiecePage"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { readFile, writeFile } from "util/cache"
import { useRouter } from "next/router"
import { getArtItems } from "util/dataFetching"

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const displayAll = router.query.display === "all"
  const itemsArray: ArtItemType[] = props.itemsArray

  if (props.errors) return <></>

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

  const item: ArtItemType =
    props.id && itemsArray[getArtItemIndexById(props.id, itemsArray)]
  if (!item || !item.title) throw new Error("Item not found")

  const { prevItemId, nextItemId } = getPrevandNextArtItemId(
    item,
    itemsArray,
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
  try {
    let artItems: ArtItemType[] = await readFile(".artcache")
    if (artItems.length <= 0) {
      artItems = await getArtItems()
      await writeFile(artItems, ".artcache")
    }

    const paths = artItems.map((item) => ({
      params: { id: item.id },
    }))

    return { paths, fallback: false }
  } catch (err) {
    console.error("Error in ArtPiece.getStaticPaths: ", err)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    let itemsArray: ArtItemType[] = await readFile(".artcache")
    if (itemsArray.length <= 0) {
      itemsArray = await getArtItems()
      await writeFile(itemsArray, ".artcache")
    }

    const id = context.params?.id

    return {
      props: {
        itemsArray,
        id,
      },
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ArtPiece.getLayout = getLayout

export default ArtPiece
