import { NavMain } from "./MainNav.styles"
import { NavItemsType } from "./MainNav.types"
import MainNavItem from "./MainNavItem"

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
    sublinks: [
      { text: "Instagram", url: "https://www.instagram.com" },
      { text: "Patreon", url: "https://www.pateron.com" },
      { text: "Twitter", url: "https://www.twitter.com" },
      { text: "Email", url: "https://www.hotmail.ca" },
    ],
  },
  { text: "Shop", url: "/shop" },
]

const MainNav = () => {
  const mainMenu = navItems.map((item) => (
    <>
      <MainNavItem text={item.text} url={item.url} key={item.text} />
      {item.filters &&
        item.filters.map((filter) => (
          <MainNavItem text={filter.text} key={filter.text} />
        ))}
      {item.sublinks &&
        item.sublinks.map((sublink) => (
          <MainNavItem
            text={sublink.text}
            url={sublink.url}
            key={sublink.text}
            external
          />
        ))}
    </>
  ))

  return <NavMain>{mainMenu}</NavMain>
}

export default MainNav
