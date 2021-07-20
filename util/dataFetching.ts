import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { Product } from "use-shopping-cart"
import {
  CustomProductType,
  StrapiFetchArtDataType,
  StrapiFetchShopDataType,
} from "./data.types"
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
  if (!rawData || rawData.length < 1) throw new Error("Error fetching art data")

  const artItems: ArtItemType[] = rawData.map((item) => {
    return {
      id: item.id.toString(),
      title: item.title,
      description: item.description,
      image: item.image.url.split("/").pop() || "",
      type: item.type,
      ...(item.shop_item &&
        item.shop_item.id && {
          shopItemUrl: `/shop/${item.shop_item.id.toString()}`,
        }),
    }
  })

  return artItems
}

export const getShopItems = async () => {
  const shopItemsUrl = process.env.BACKEND_URL + "/shop-items"
  const rawData: StrapiFetchShopDataType[] = await fetchData(
    shopItemsUrl,
    null,
    "GET"
  )

  if (!rawData || rawData.length < 1)
    throw new Error("Error fetching shop data")

  let customTypesProducts: Product[] = []
  let customNumberOfPeopleProducts: Product[] = []
  let customAddonsProducts: Product[] = []

  let shopItems: CustomProductType[] = rawData.map((item) => {
    if (item.type.toUpperCase() === "CUSTOM") {
      customTypesProducts = customTypesProducts.concat(
        item.custom_types!.map(
          (addonItem) =>
            <Product>{
              sku: `custom-types-${addonItem.custom_types_name}`,
              name: addonItem.custom_types_name,
              price: addonItem.custom_types_price,
              currency: CURRENCY,
            }
        )
      )

      customNumberOfPeopleProducts = customNumberOfPeopleProducts.concat(
        item.custom_numberofpeople!.map(
          (addonItem) =>
            <Product>{
              sku: `custom-numofpeople-${addonItem.custom_numberofpeople_name}`,
              name: addonItem.custom_numberofpeople_name,
              price: addonItem.custom_numberofpeople_price,
              currency: CURRENCY,
            }
        )
      )

      customAddonsProducts = customAddonsProducts.concat(
        item.custom_addons!.map(
          (addonItem) =>
            <Product>{
              sku: `custom-addons-${addonItem.custom_addons_name}`,
              name: addonItem.custom_addons_name,
              price: addonItem.custom_addons_price,
              currency: CURRENCY,
            }
        )
      )
    }

    const stripeProduct: CustomProductType = {
      sku: item.id.toString(),
      name: item.title,
      currency: CURRENCY,
      description: item.description || "",
      image:
        (item.images.length > 0 && item.images[0].url.split("/").pop()) || "",
      price: item.price,
      product_data: {
        metadata: {
          type: item.type || "",
          maxQuantity: item.maxquantity || 23,
        },
      },
      images: item.images,
      isSold: item.is_sold,
      ...(item.type.toUpperCase() === "CUSTOM" && {
        customData: {
          availableAddons: {
            types: customTypesProducts,
            addons: customAddonsProducts,
            numberOfPeople: customNumberOfPeopleProducts,
          },
        },
      }),
    }

    return stripeProduct
  })

  shopItems = shopItems.concat(
    customTypesProducts,
    customAddonsProducts,
    customNumberOfPeopleProducts
  )

  return shopItems
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
