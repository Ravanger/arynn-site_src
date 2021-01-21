import Menu from "./Menu"
import HeroImage from "./HeroImage"
import { MenuItemType } from "./HomePage.types"

const menuItems: MenuItemType[] = [
  { text: "Art", tailSide: "RIGHT", url: "/art" },
  { text: "Shop", tailSide: "CENTER", url: "/shop" },
  { text: "Connect", tailSide: "LEFT", url: "/connect" },
]

const HomePage = () => {
  return (
    <>
      <Menu menuItems={menuItems} />
      <HeroImage />
    </>
  )
}

export default HomePage
