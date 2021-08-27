import { CustomProductType } from "./data.types"
import { v4 as uuidv4 } from "uuid"

export const addProductToCart = (
  productArray: CustomProductType[],
  product: CustomProductType,
  quantity = 1
) => {
  const generatedId = uuidv4()
  product.customId = generatedId
  product.quantity = quantity

  return [...productArray, product]
}

export const removeProductFromCart = (
  productArray: CustomProductType[],
  product: CustomProductType
) => {
  return productArray.filter((item) => item.customId !== product.customId)
}

export const isProductInCart = (
  productArray: CustomProductType[],
  product: CustomProductType
): boolean => {
  return productArray.findIndex((item) => item.sku === product.sku) !== -1
}

export const getProductQuantityInCart = (
  productArray: CustomProductType[],
  product: CustomProductType
) => {
  const cartItem = productArray.find((item) => item.sku === product.sku)
  if (cartItem) return cartItem.quantity || 0

  return 0
}

export const setProductQuantityInCart = (
  productArray: CustomProductType[],
  product: CustomProductType,
  quantity: number
) => {
  product.quantity = quantity
  return productArray.map((item) =>
    item.customId === product.customId ? product : item
  )
}

export const getCustomProductQuantityInCart = (
  productArray: CustomProductType[],
  product: CustomProductType
) => {
  return [...productArray.filter((item) => item.sku === product.sku)].length
}

export const getProductBySku = (
  sku: string,
  cartItems: CustomProductType[]
): CustomProductType | null => {
  let foundItem: CustomProductType | null = null

  cartItems.forEach((item) => {
    const selectedCustomAddons = item.customData?.selectedAddons

    switch (sku) {
      case item.sku: {
        foundItem = item
        break
      }
      case selectedCustomAddons?.type.sku: {
        foundItem = selectedCustomAddons!.type
        break
      }
      case selectedCustomAddons?.extended_option.sku: {
        foundItem = selectedCustomAddons!.extended_option
        break
      }
      default:
        break
    }

    selectedCustomAddons?.addons.forEach((addon) => {
      if (addon.sku === sku) foundItem = addon
    })
  })

  return foundItem
}
