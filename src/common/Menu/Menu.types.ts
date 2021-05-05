import React, { Ref } from "react"

export interface MenuPropsType {
  menuRef?: Ref<any>
  setMenuOpen: (val: boolean) => void
  isMenuOpen: boolean
  children: React.ReactNode
  zindex?: string
  shopMenu?: boolean
  role?: string
  isMobile: boolean
}
