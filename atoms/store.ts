import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { CartType } from "./store.types"

export const artFilterAtom = atom("")
export const shopFilterAtom = atom("")
export const screenWidthAtom = atom(0)

export const cartAtom = atomWithStorage<CartType>("cartProducts", {
  products: [],
  totalPrice: 0,
})
