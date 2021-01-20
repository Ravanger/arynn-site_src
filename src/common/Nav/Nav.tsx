import Link from "next/link"
import { NavItemsType } from "./Nav.types"

const navItems: NavItemsType[] = [
  {
    text: "Art",
    url: "/art",
    filters: [
      { text: "Paintings" },
      { text: "Comics" },
      { text: "Digital Art" },
      { text: "Design" },
    ],
  },
  {
    text: "Connect",
    url: "/connect",
    filters: [
      { text: "Instagram", url: "www.instagram.com" },
      { text: "Patreon", url: "www.pateron.com" },
      { text: "Twitter", url: "www.twitter.com" },
      { text: "Email", url: "www.hotmail.ca" },
    ],
  },
  { text: "Shop", url: "/shop" },
]

const Nav = () => {
  const mainMenu = navItems.map((item) => (
    <Link href={item.url} key={item.text}>
      <a>{item.text}</a>
    </Link>
  ))

  return <nav>{mainMenu}</nav>
}

export default Nav
