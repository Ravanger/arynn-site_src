import Menu from "./Menu"
import HeroImage from "./HeroImage"
import { MenuItemType } from "./HomePage.types"
import { DivWrapper } from "./HomePage.styles"

const menuItems: MenuItemType[] = [
  { text: "Art", tailSide: "RIGHT", url: "/art" },
  { text: "Shop", tailSide: "CENTER", url: "/shop" },
  { text: "Connect", tailSide: "LEFT", url: "/connect" },
]

const HomePage = () => {
  return (
    <DivWrapper>
      <Menu menuItems={menuItems} />
      <HeroImage />
    </DivWrapper>
  )
}

export default HomePage
