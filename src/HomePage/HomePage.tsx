import Menu from "./Menu"
import HeroImage from "./HeroImage"
import { MenuItemType } from "./HomePage.types"
import { DivWrapper } from "./HomePage.styles"

const menuItems: MenuItemType[] = [
  { text: "Art", url: "/art" },
  { text: "Shop", url: "/shop" },
  { text: "Connect", url: "/connect" },
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
