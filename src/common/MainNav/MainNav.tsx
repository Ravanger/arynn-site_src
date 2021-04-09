import { Fragment, useRef, useState } from "react"
import { NavItemsType } from "./MainNav.types"
import SiteLink from "src/common/SiteLink"
import { useAtom } from "jotai"
import { artFilterAtom } from "atoms/store"
import { useRouter } from "next/router"
import { IoMenu, IoTriangle } from "react-icons/io5"
import Spacer from "src/common/Spacer"
import { useClickOutside } from "util/clickHandlers"
import { useShoppingCart } from "use-shopping-cart"
import { socialLinks } from "src/common/socials"

const MainNav = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)
  const [artFilter, setArtFilter] = useAtom(artFilterAtom)
  const { cartCount } = useShoppingCart()

  const router = useRouter()
  const mainMenuRef = useRef(null)
  useClickOutside(mainMenuRef, () => setIsMainMenuOpen(false))

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
        {
          text: "Instagram",
          url: socialLinks.instagram || "https://www.instagram.com/artsyarynn",
          external: true,
        },
        {
          text: "Patreon",
          url: socialLinks.patreon || "https://www.pateron.com",
          external: true,
        },
        {
          text: "Twitter",
          url: socialLinks.twitter || "https://www.twitter.com",
          external: true,
        },
        {
          text: "Email",
          url: socialLinks.email
            ? `mailto:${socialLinks.email}`
            : "https://www.hotmail.ca",
          external: true,
        },
      ],
    },
    {
      text: "Shop",
      url: "/shop",
      sublinks: [{ text: `Cart (${cartCount})`, url: "/shop/cart" }],
    },
  ]

  const mainMenu = navItems.map((item) => (
    <Fragment key={item.text + item.url}>
      <SiteLink
        text={item.text}
        url={item.url}
        active={router.pathname.includes(item.url)}
        primary
        onClick={() => {
          setArtFilter("")
          setIsMainMenuOpen(false)
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
            onClick={() => {
              setIsMainMenuOpen(false)
            }}
            active={router.pathname === sublink.url}
            external={sublink.external}
          />
        ))}
    </Fragment>
  ))

  return (
    <div className="sticky z-50 top-0 text-center max-w-5xl lg:relative lg:w-full">
      <IoTriangle
        className="text-white inline-block transform translate-y-1"
        size="1.5rem"
      />
      <div
        className="bg-white w-auto text-center max-w-5xl overflow-hidden rounded-xl2 px-16 py-4 shadow-md lg:rounded-xl4 lg:static lg:w-full lg:p-8"
        ref={mainMenuRef}
      >
        <button
          className="cursor-pointer text-center text-blue hover:text-pink w-auto inline-block align-middle lg:hidden"
          onClick={() => {
            setIsMainMenuOpen(!isMainMenuOpen)
          }}
        >
          <IoMenu size="2rem" className="" />
        </button>
        <Spacer id="mainMenuSpacer" className="hidden" />
        <nav
          className={`${
            isMainMenuOpen ? "flex" : "hidden"
          } flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:flex-nowrap lg:justify-center lg:items-baseline`}
        >
          {mainMenu}
        </nav>
      </div>
    </div>
  )
}

export default MainNav
