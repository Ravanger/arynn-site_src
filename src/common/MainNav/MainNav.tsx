import { Fragment } from "react"
import { NavItemsType } from "./MainNav.types"
import SiteLink from "src/common/SiteLink"
import { useAtom } from "jotai"
import { artFilterAtom } from "atoms/store"
import { useRouter } from "next/router"
import { IoMenu } from "react-icons/io5"
import Spacer from "src/common/Spacer"

const navItems: NavItemsType[] = [
  {
    text: "Art",
    url: "/art",
    filters: [
      { text: "Paintings", type: "paintings" },
      { text: "Comics", type: "comics" },
      { text: "Digital Art", type: "digital_art" },
      { text: "Design", type: "design" },
    ],
  },
  {
    text: "Connect",
    url: "/connect",
    sublinks: [
      { text: "Instagram", url: "https://www.instagram.com/artsyarynn" },
      { text: "Patreon", url: "https://www.pateron.com" },
      { text: "Twitter", url: "https://www.twitter.com" },
      { text: "Email", url: "https://www.hotmail.ca" },
    ],
  },
  { text: "Shop", url: "/shop" },
]

const MainNav = () => {
  const [artFilter, setArtFilter] = useAtom(artFilterAtom)
  const router = useRouter()

  const mainMenu = navItems.map((item) => (
    <Fragment key={item.text + item.url}>
      <SiteLink
        text={item.text}
        url={item.url}
        active={router.pathname.includes(item.url)}
        primary
        onClick={() => {
          setArtFilter("")
        }}
      />
      {item.filters &&
        item.filters.map((filter) => (
          <SiteLink
            text={filter.text}
            key={filter.text}
            url={item.url}
            active={artFilter === filter.type}
            onClick={() => {
              setArtFilter(filter.type)
            }}
            filter
          />
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

  return (
    <div className="bg-white w-auto text-center absolute z-10 max-w-5xl overflow-hidden top-4 rounded-xl2 px-16 py-4 lg:rounded-xl4 lg:static lg:w-full lg:p-8">
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer text-center text-blue hover:text-pink w-auto inline-block align-middle lg:hidden"
      >
        <IoMenu size="2rem" className="" />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" hidden />
      <Spacer id="mainMenuSpacer" className="hidden" />
      <nav
        id="mainMenu"
        className="hidden flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:flex-nowrap lg:justify-center lg:items-baseline"
      >
        {mainMenu}
      </nav>
    </div>
  )
}

export default MainNav
