import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { StrapiFetchArtDataType } from "./dataTypes"

export const getDataFromUrl = async (url: RequestInfo) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    const rawData = await res.json()
    return rawData
  } catch (error) {
    console.error("Error fetching data: ", error)
    return null
  }
}

export const getArtItems = async () => {
  const artItemsUrl = process.env.BACKEND_URL + "/art-items"
  const rawData: StrapiFetchArtDataType[] = await getDataFromUrl(artItemsUrl)
  if (!rawData) throw new Error("Error fetching data")

  const artItems: ArtItemType[] = rawData.map((item) => ({
    id: item.id.toString(),
    title: item.title,
    description: item.description,
    image: process.env.BACKEND_URL + item.image.url,
    type: item.type,
  }))

  return artItems
}
