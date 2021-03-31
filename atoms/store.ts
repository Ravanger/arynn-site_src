import { atom } from "jotai"
import { atomWithReducer } from "jotai/utils"
import { ShopItemType } from "src/ShopPage/ShopPage.types"
import { readFromLocalStorage, saveToLocalStorage } from "util/localStorage"
import { itemIdExistsInArray } from "util/misc"

export const artFilterAtom = atom("")
export const shopFilterAtom = atom("")

const shopCartReducer = (
  state: ShopItemType[],
  action: { type: "ADD" | "REMOVE" | "CLEAR"; payload?: ShopItemType }
) => {
  switch (action.type) {
    case "ADD":
      if (!action.payload || itemIdExistsInArray(state, action.payload.id))
        return state

      const newShopItemsArray = [...state, action.payload]
      saveToLocalStorage("cartItems", newShopItemsArray)
      return newShopItemsArray

    case "REMOVE":
      if (!action.payload || !itemIdExistsInArray(state, action.payload.id))
        return state

      const payloadId = action.payload.id
      const filteredArray = state.filter(
        (shopItem) => shopItem.id !== payloadId
      )
      saveToLocalStorage("cartItems", filteredArray)
      return filteredArray

    case "CLEAR":
      if (state.length === 0) return state

      saveToLocalStorage("cartItems", [])
      return []

    default:
      return state
  }
}

export const shopCartAtom = atomWithReducer(
  JSON.parse(readFromLocalStorage("cartItems") || "[]") as ShopItemType[],
  shopCartReducer
)
