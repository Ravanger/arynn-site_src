import { CartDetails, Product } from "use-shopping-cart"
import { CartType } from "./cart.types"
import { readFromLocalStorage, writeToLocalStorage } from "./localStorage"

export const addCartItem = (product: Product, quantity: number) => {
  product.quantity = quantity

  let cartProducts: CartType | null = readFromLocalStorage("cartProducts")
  if (!cartProducts) {
    cartProducts = { products: [], totalPrice: 0 }
  }

  cartProducts.products.push(product)
  cartProducts.totalPrice += product.price

  writeToLocalStorage("cartProducts", cartProducts)
}

export const removeCartItem = (sku: string) => {
  const cartProducts: CartType | null = readFromLocalStorage("cartProducts")
  if (!cartProducts) return

  cartProducts.products.indexOf()
}

export const itemIdExistsInCart = (
  searchArray: CartDetails,
  id: string
): boolean => {
  const objKeysArray = Object.keys(searchArray)
  return objKeysArray.indexOf(id) !== -1
}
