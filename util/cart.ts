import { Product } from "use-shopping-cart"

export const itemExistsInCart = (
  productArray: Product[],
  sku: string
): boolean => {
  return productArray.findIndex((item) => item.sku === sku) !== -1
}

export const addProductToCart = (
  productArray: Product[],
  product: Product,
  quantity: number
) => {
  product.quantity = quantity
  return [...productArray, product]
}

export const removeProductFromCart = (
  productArray: Product[],
  product: Product
) => {
  return productArray.filter((item) => item.sku !== product.sku)
}

export const getProductQuantityInCart = (
  productArray: Product[],
  product: Product
) => {
  const cartItem = productArray.find((item) => item.sku === product.sku)
  if (cartItem) return cartItem.quantity || 0

  return 0
}
