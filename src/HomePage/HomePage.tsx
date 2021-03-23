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
    <div className="flex w-screen h-screen flex-col items-center">
      <Menu menuItems={menuItems} />
      <div className="max-h-1/3 overflow-hidden lg:absolute lg:max-h-6/10 lg:h-full lg:bottom-0">
        <MainImage />
      </div>
    </div>
  )
}

export default HomePage
