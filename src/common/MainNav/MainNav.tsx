import { Fragment } from "react"
import { NavMain } from "./MainNav.styles"
import { NavItemsType } from "./MainNav.types"
import SiteLink from "src/common/SiteLink"

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
    <Fragment key={item.text + item.url}>
      <SiteLink text={item.text} url={item.url} primary />
      {item.filters &&
        item.filters.map((filter) => (
          <SiteLink text={filter.text} key={filter.text} />
        ))}
      {item.sublinks &&
        item.sublinks.map((sublink) => (
          <SiteLink
            text={sublink.text}
            url={sublink.url}
            key={sublink.text + sublink.url}
            external
          />
        ))}
    </Fragment>
  ))

  return <NavMain>{mainMenu}</NavMain>
}

export default MainNav
