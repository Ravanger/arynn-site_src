import { CustomProductType } from "./data.types"
import { v4 as uuidv4 } from "uuid"

export const addProductToCart = (
  productArray: CustomProductType[],
  product: CustomProductType,
  quantity = 1
) => {
  const generatedId = uuidv4()
  product.id = generatedId
  product.quantity = quantity

  return [...productArray, product]
}

export const removeProductFromCart = (
  productArray: CustomProductType[],
  product: CustomProductType
) => {
  return productArray.filter((item) => item.id !== product.id)
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
  return productArray.map((item) => (item.id === product.id ? product : item))
}

export const getCustomProductQuantityInCart = (
  productArray: CustomProductType[],
  product: CustomProductType
) => {
  return [...productArray.filter((item) => item.sku === product.sku)].length
}
