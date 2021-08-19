import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ArtPiecePage from "src/ArtPage/ArtPiecePage"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { readFile, writeFile } from "util/cache"
import { useRouter } from "next/router"
import { getArtItems } from "util/dataFetching"
import { ParsedUrlQuery } from "querystring"

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  if (props.errors || !props.itemsArray || !props.id) return <></>

  const displayAll = router.query.display === "all"

  const getArtItemIndexById = (id: string | string[], array: ArtItemType[]) => {
    return array.findIndex((item) => item.id === id)
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

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>
) => {
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
    console.error("Error in ArtPiece.getStaticProps: ", err)
    return { props: { errors: err } }
  }
}

ArtPiece.getLayout = getLayout

export default ArtPiece
