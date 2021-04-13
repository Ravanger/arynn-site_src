import { Dispatch, LegacyRef } from "react"

export interface MainNavPropsType {
  mainMenuRef: LegacyRef<HTMLDivElement>
  setIsMainMenuOpen: Dispatch<React.SetStateAction<boolean>>
  isMainMenuOpen: boolean
  mainMenu: JSX.Element[]
}
