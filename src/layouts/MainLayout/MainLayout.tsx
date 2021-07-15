import Menu from "src/common/Menu"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps, NavItemsType } from "../Layout.types"
import MainImage from "src/common/MainImage"
import { IoTriangle } from "react-icons/io5"
import { useAtom } from "jotai"
import { screenWidthAtom, artFilterAtom, cartAtom } from "atoms/store"
import { useRouter } from "next/router"
import { useClickOutside } from "util/clickHandlers"
import { socialLinks } from "src/common/socials"
import React, { Fragment, useEffect, useRef, useState } from "react"
import SiteLink from "src/common/SiteLink"
import BackgroundClouds from "../BackgroundClouds"
import { debounce } from "util/dataFetching"

const MainLayout = (props: LayoutProps) => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)
  const [artFilter, setArtFilter] = useAtom(artFilterAtom)
  const [screenWidth, setScreenWidth] = useAtom(screenWidthAtom)
  const [cartInfo] = useAtom(cartAtom)

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth)
    })

    setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [screenWidth, setScreenWidth])

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
        socialLinks.instagram
          ? {
              text: "Instagram",
              url: socialLinks.instagram,
              external: true,
            }
          : undefined,
        socialLinks.patreon
          ? {
              text: "Patreon",
              url: socialLinks.patreon,
              external: true,
            }
          : undefined,
        socialLinks.twitter
          ? {
              text: "Twitter",
              url: socialLinks.twitter,
              external: true,
            }
          : undefined,
        socialLinks.email
          ? {
              text: "Email",
              url: `mailto:${socialLinks.email}`,
              external: true,
            }
          : undefined,
      ],
    },
    {
      text: "Shop",
      url: "/shop",
      sublinks: [{ text: `Cart (${cartInfo.length || 0})`, url: "/shop/cart" }],
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
              setIsMainMenuOpen(false)
            }}
            filter
          />
        ))}
      {item.sublinks &&
        item.sublinks.map(
          (sublink) =>
            sublink && (
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
            )
        )}
    </Fragment>
  ))

  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      <BackgroundClouds />
      <Spacer size="2rem" />
      <div className="sticky top-0 z-50 flex flex-col items-center sm:p-8 lg:static">
        <Menu
          isMenuOpen={isMainMenuOpen}
          setMenuOpen={setIsMainMenuOpen}
          menuRef={mainMenuRef}
          role="navigation"
          isMobile={screenWidth < 1024}
        >
          {mainMenu}
        </Menu>
      </div>
      <Spacer size="2rem" />
      <div className="overflow-hidden w-full flex flex-col items-center pb-0 sm:p-8">
        <ContentBox>{props.children}</ContentBox>
        <IoTriangle
          className="text-white inline-block transform -translate-y-2 rotate-180 z-20"
          size="4rem"
        />
        <div className="relative -bottom-10">
          <MainImage />
        </div>
      </div>
    </div>
  )
}

export const getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
