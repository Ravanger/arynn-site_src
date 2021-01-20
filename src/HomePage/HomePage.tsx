import Menu from "./Menu"
import { MenuItemType } from "./HomePage.types"

const menuItems: MenuItemType[] = [
  { text: "Art", side: "right", url: "/art" },
  { text: "Shop", side: "center", url: "/shop" },
  { text: "Connect", side: "left", url: "/connect" },
]

const HomePage = () => {
  return <Menu menuItems={menuItems} />
}

export default HomePage
