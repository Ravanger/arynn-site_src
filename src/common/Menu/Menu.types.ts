import React, { Dispatch, LegacyRef } from "react"

export interface MenuPropsType {
  menuRef?: LegacyRef<any>
  setMenuOpen: (val: boolean) => void
  isMenuOpen: boolean
  children: React.ReactNode
  zindex?: string
  shopMenu?: boolean
  role?: string
}
