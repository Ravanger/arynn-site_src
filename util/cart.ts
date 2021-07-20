import { Product } from "use-shopping-cart"

export const addProductToCart = (
  productArray: Product[],
  product: Product,
  quantity = 1
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

// const confirmCustomProduct = (customId: string) => {
//   const baseItemWithId = { ...props.customShopInfo }
//   baseItemWithId.customId = customId

//   const typesWithId = { ...selectedCustomAddons.type }
//   typesWithId.customId = customId

//   const numberOfPeopleWithId = { ...selectedCustomAddons.numberOfPeople }
//   numberOfPeopleWithId.customId = customId

//   const addonsWithId = [...selectedCustomAddons.addons]
//   addonsWithId.forEach((addonItem) => {
//     addonItem.customId = customId
//   })

//   addItem(baseItemWithId)
//   addItem(typesWithId)
//   addItem(numberOfPeopleWithId)
//   addonsWithId.forEach((addonItem) => {
//     addItem(addonItem)
//   })
// }
