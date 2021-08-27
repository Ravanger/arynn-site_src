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
import { useEffect, useState } from "react"

const ArtPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const [prevAndNextItemHref, setPrevAndNextItemHref] = useState({
    prevPage: {
      id: "-1",
      pathname: `/art/-1`,
      ...(router.query.display === "all" && { query: { display: "all" } }),
    },
    nextPage: {
      id: "-1",
      pathname: `/art/-1`,
      ...(router.query.display === "all" && { query: { display: "all" } }),
    },
  })

  const [item, setItem] = useState<ArtItemType>()

  useEffect(() => {
    if (!props.itemsArray || !props.id) return

    const getArtItemIndexById = (
      id: string | string[],
      array: ArtItemType[]
    ) => {
      return array.findIndex((item) => item.id === id)
    }

    setItem(props.itemsArray[getArtItemIndexById(props.id, props.itemsArray)])
  }, [props.id, props.itemsArray])

  useEffect(() => {
    if (!props.itemsArray || !item) return

    const getPrevandNextArtItemHref = (
      artItem: ArtItemType,
      itemsArray: ArtItemType[],
      displayAll: boolean
    ) => {
      if (!item) return

      let prevItemId = "-1"
      let nextItemId = "-1"

      const filteredArray = displayAll
        ? itemsArray
        : itemsArray.filter((item) => item.type === artItem.type)

      const arrLength = filteredArray.length
      const itemIndex = filteredArray.findIndex(
        (item) => item.id === artItem.id
      )

      if (itemIndex !== -1) {
        prevItemId = filteredArray[(itemIndex + arrLength - 1) % arrLength].id
        nextItemId = filteredArray[(itemIndex + 1) % arrLength].id
      }

      const prevNextHref = {
        prevPage: {
          id: prevItemId,
          pathname: `/art/${prevItemId}`,
          ...(router.query.display === "all" && { query: { display: "all" } }),
        },
        nextPage: {
          id: nextItemId,
          pathname: `/art/${nextItemId}`,
          ...(router.query.display === "all" && { query: { display: "all" } }),
        },
      }

      return prevNextHref
    }

    const nextPrev = getPrevandNextArtItemHref(
      item,
      props.itemsArray,
      router.query.display === "all"
    )
    nextPrev && setPrevAndNextItemHref(nextPrev)
  }, [item, props.itemsArray, router.query])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "l": {
          router.push({
            pathname: prevAndNextItemHref.nextPage.pathname,
            query: prevAndNextItemHref.nextPage.query,
          })
          break
        }
        case "ArrowLeft":
        case "j": {
          router.push({
            pathname: prevAndNextItemHref.prevPage.pathname,
            query: prevAndNextItemHref.prevPage.query,
          })
          break
        }
        default: {
          return
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [prevAndNextItemHref, router])

  if (!item || props.errors || !props.itemsArray || !props.id) return <></>

  return (
    <>
      <SEO
        title={"Art: " + item.title}
        description={`Arynn's art - ${item.title}: ${item.description}`}
        url={"/art/" + item.id}
      />
      <ArtPiecePage
        item={item}
        prevPage={{
          pathname: prevAndNextItemHref.prevPage.pathname,
          query: prevAndNextItemHref.prevPage.query,
        }}
        nextPage={{
          pathname: prevAndNextItemHref.nextPage.pathname,
          query: prevAndNextItemHref.nextPage.query,
        }}
        displayAll={router.query.display === "all"}
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
