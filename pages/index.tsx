import SEO from "src/common/SEO"
import HomePage from "src/HomePage"
import { MenuItemType } from "util/data.types"

const Home = () => {
  const menuItems: MenuItemType[] = [
    { text: "Art", url: "/art" },
    { text: "Shop", url: "/shop" },
    { text: "Connect", url: "/connect" },
  ]

  return (
    <>
      <SEO title="Arynn" description="Arynn's home page" url="" />
      <HomePage menuItems={menuItems} />
    </>
  )
}

export default Home
