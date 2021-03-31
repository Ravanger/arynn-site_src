import { atom } from "jotai"
import { atomWithReducer } from "jotai/utils"
import { ShopItemType } from "src/ShopPage/ShopPage.types"

export const artFilterAtom = atom("")
export const shopFilterAtom = atom("")

const shopCartReducer = (
  state: ShopItemType[],
  action: { type: "ADD" | "REMOVE" | "CLEAR"; payload: ShopItemType }
) => {
  switch (action.type) {
    case "ADD":
      let newShopItemsArray = [...state]
      if (
        newShopItemsArray.findIndex(
          (shopItem) => shopItem.id === action.payload.id
        ) === -1
      ) {
        newShopItemsArray = [...newShopItemsArray, action.payload]
        typeof window !== "undefined" &&
          localStorage.setItem("cartItems", JSON.stringify(newShopItemsArray))
      }
      console.log(newShopItemsArray)
      return newShopItemsArray
    case "REMOVE":
      return state.filter((shopItem) => shopItem.id !== action.payload.id)
    case "CLEAR":
      return []
    default:
      return state
  }
}

export const shopCartAtom = atomWithReducer(
  JSON.parse(
    (typeof window !== "undefined" && localStorage.getItem("cartItems")) || "[]"
  ) as ShopItemType[],
  shopCartReducer
)
