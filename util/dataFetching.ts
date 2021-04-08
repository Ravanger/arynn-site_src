import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { Product } from "use-shopping-cart"
import { StrapiFetchArtDataType, StrapiFetchShopDataType } from "./data.types"
import { CURRENCY } from "./stripe"

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
    image: item.image.url,
    type: item.type,
    ...(item.shop_item && {
      shopItemUrl: `/shop/${item.shop_item.id.toString()}`,
    }),
  }))

  return artItems
}

export const getShopItems = async () => {
  const shopItemsUrl = process.env.BACKEND_URL + "/shop-items"
  const rawData: StrapiFetchShopDataType[] = await getDataFromUrl(shopItemsUrl)
  if (!rawData) throw new Error("Error fetching data")

  const shopItems: Product[] = rawData.map((item) => {
    const stripeProduct = {
      sku: item.id.toString(),
      name: item.title,
      currency: CURRENCY,
      description: item.description,
      image: item.images[0].url,
      price: item.price,
      product_data: {
        metadata: {
          type: item.type,
        },
      },
      images: item.images,
    }

    return stripeProduct
  })

  return shopItems
}

export const fetchJSON = async (url: string, data?: any) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data && JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return
    })

  return response
}
