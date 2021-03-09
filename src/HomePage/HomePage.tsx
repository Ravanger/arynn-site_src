import Menu from "./Menu"
import HeroImage from "./HeroImage"
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
      <HeroImage />
    </div>
  )
}

export default HomePage
