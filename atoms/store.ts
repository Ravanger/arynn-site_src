import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { CustomProductType } from "util/data.types"

export const artFilterAtom = atom("")
export const shopFilterAtom = atom("")
export const screenWidthAtom = atom(0)

export const cartAtom = atomWithStorage<CustomProductType[]>("cartProducts", [])
