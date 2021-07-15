import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Product } from "use-shopping-cart"

export const artFilterAtom = atom("")
export const shopFilterAtom = atom("")
export const screenWidthAtom = atom(0)

export const cartAtom = atomWithStorage<Product[]>("cartProducts", [])
