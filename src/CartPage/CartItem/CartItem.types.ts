import React, { MouseEventHandler } from "react"
import { CustomProductType } from "util/data.types"

export interface CartItemBaseType {
  item: CustomProductType
  cartItems: CustomProductType[]
  setCartItems: (update: React.SetStateAction<CustomProductType[]>) => void
  removeCartItem: MouseEventHandler<HTMLButtonElement>
  isCustom?: boolean
}

export interface CartItemType extends CartItemBaseType {
  quantityInCart: number
  setWantedQuantity: (
    productArray: CustomProductType[],
    product: CustomProductType,
    quantity: number
  ) => CustomProductType[]
}

export interface CartItemCustomType extends CartItemBaseType {}

export interface CustomPropertyType {
  title: string
  description: string | string[]
  price: number
}
