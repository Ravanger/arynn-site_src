import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { Product } from "use-shopping-cart"
import {
  CustomProductType,
  ExtendedOptionsProductType,
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

  let customTypesProducts: ExtendedOptionsProductType[] = []
  let customTypesExtendedOptionsProducts: Product[] = []
  let customAddonsProducts: Product[] = []

  let shopItems: CustomProductType[] = rawData.map((item) => {
    if (item.type.toUpperCase() === "CUSTOM") {
      item.custom_types &&
        item.custom_types.forEach((customType) => {
          const currentCustomTypeExtendedOptions: Product[] = []

          customType.extended_options.forEach((customTypeExtendedOption) => {
            const extendedOption = {
              sku: `custom-type-extended-${customType.custom_types_name}-${customTypeExtendedOption.extended_option_name}`,
              name: customTypeExtendedOption.extended_option_name,
              price: customTypeExtendedOption.extended_option_price,
              currency: CURRENCY,
            }
            customTypesExtendedOptionsProducts.push(extendedOption)
            currentCustomTypeExtendedOptions.push(extendedOption)
          })

          customTypesProducts.push({
            sku: `custom-type-${customType.custom_types_name}`,
            name: customType.custom_types_name,
            price: customType.custom_types_price,
            currency: CURRENCY,
            extended_options: currentCustomTypeExtendedOptions,
          })
        })

      item.custom_addons &&
        item.custom_addons.forEach((customAddon) => {
          customAddonsProducts.push({
            sku: `custom-addon-${customAddon.custom_addons_name}`,
            name: customAddon.custom_addons_name,
            price: customAddon.custom_addons_price,
            currency: CURRENCY,
          })
        })
    }

    const stripeProduct: CustomProductType = {
      sku: item.id.toString(),
      customId: "",
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
          },
          selectedAddons: {
            type: customTypesProducts[0],
            extended_option: customTypesProducts[0].extended_options[0],
            addons: [],
          },
        },
      }),
    }

    return stripeProduct
  })

  shopItems = shopItems.concat(
    customTypesProducts,
    customAddonsProducts,
    customTypesExtendedOptionsProducts
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
