import { Product } from "use-shopping-cart"

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

export const isProductInCart = (
  productArray: Product[],
  product: Product
): boolean => {
  return productArray.findIndex((item) => item.sku === product.sku) !== -1
}

export const getProductQuantityInCart = (
  productArray: Product[],
  product: Product
) => {
  const cartItem = productArray.find((item) => item.sku === product.sku)
  if (cartItem) return cartItem.quantity || 0

  return 0
}

export const setProductQuantityInCart = (
  productArray: Product[],
  product: Product,
  quantity: number
) => {
  product.quantity = quantity
  return productArray.map((item) => (item.sku === product.sku ? product : item))
}
