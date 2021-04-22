import React from "react"
import Spacer from "src/common/Spacer"
import { LandingMenuPropsType } from "./LandingMenu.types"
import { IoTriangle } from "react-icons/io5"
import Link from "next/link"
import { MenuItemType } from "util/data.types"

const MenuButton = (props: MenuItemType) => (
  <Link href={props.url} passHref>
    <a className="bg-white text-pink hover:text-blue flex justify-center items-center rounded-xl4 shadow-md text-2xl w-48 h-24 sm:w-64 sm:h-32 sm:text-4xl">
      {props.text}
    </a>
  </Link>
)

const LandingMenu = (props: LandingMenuPropsType) => {
  const menu = props.menuItems.map((item) => {
    const isButtonShop = item.text === "Shop"
    return (
      <React.Fragment key={item.text}>
        <Spacer size="1rem" />
        <div
          className={`animate-scaleExpandIn hover:animate-scaleExpandOut text-center lg:relative z-10 ${
            isButtonShop ? "lg:top-15p" : "lg:top-1/3"
          }`}
        >
          <MenuButton text={item.text} url={item.url} />
          <IoTriangle
            className="text-white inline-block transform -translate-y-1 rotate-180"
            size="2rem"
          />
        </div>
        <Spacer size="1rem" />
      </React.Fragment>
    )
  })

  return (
    <nav className="max-w-6xl mx-auto flex flex-nowrap justify-around items-center w-full flex-col lg:min-h-screen lg:flex-row lg:items-baseline">
      {menu}
    </nav>
  )
}

export default LandingMenu
