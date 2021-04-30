import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { Product } from "use-shopping-cart"
import { StrapiFetchArtDataType, StrapiFetchShopDataType } from "./data.types"
import { CURRENCY } from "./stripe"

export const fetchData = async (url: string, data?: any, method?: string) => {
  const response = await fetch(url, {
    method: method || "POST",
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

export const getArtItems = async () => {
  const artItemsUrl = process.env.BACKEND_URL + "/art-items"
  const rawData: StrapiFetchArtDataType[] = await fetchData(
    artItemsUrl,
    null,
    "GET"
  )
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
  const rawData: StrapiFetchShopDataType[] = await fetchData(
    shopItemsUrl,
    null,
    "GET"
  )
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
          maxQuantity: 23,
        },
      },
      images: item.images,
    }

    return stripeProduct
  })

  return shopItems
}
