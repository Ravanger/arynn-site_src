import Menu from "./Menu"
import MainImage from "src/common/MainImage"
import { MenuItemType } from "./HomePage.types"

const menuItems: MenuItemType[] = [
  { text: "Art", url: "/art" },
  { text: "Shop", url: "/shop" },
  { text: "Connect", url: "/connect" },
]

const HomePage = () => {
  return (
    <div className="flex w-full justify-center">
      <Menu menuItems={menuItems} />
      <div className="absolute bottom-0 max-h-6/10 overflow-hidden">
        <MainImage />
      </div>
    </div>
  )
}

export default HomePage
