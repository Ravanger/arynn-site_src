import React from "react"
import Spacer from "src/common/Spacer"
import Button from "./Button"
import { MenuPropsType } from "./Menu.types"
import { IoTriangle } from "react-icons/io5"

const Menu = (props: MenuPropsType) => {
  const menu = props.menuItems.map((item) => {
    const isButtonTop = item.text === "Shop"
    return (
      <React.Fragment key={item.text}>
        <Spacer size="0.5rem" />
        <div
          className={`text-center lg:relative z-10 ${
            isButtonTop ? "lg:top-15p" : "lg:top-1/3"
          }`}
        >
          <Button text={item.text} url={item.url} />
          <IoTriangle
            className="text-white inline-block transform -translate-y-1 rotate-180"
            size="2rem"
          />
        </div>
        <Spacer size="0.5rem" />
      </React.Fragment>
    )
  })

  return (
    <nav className="flex flex-nowrap justify-around items-center w-full flex-col h-2/3 lg:h-screen lg:flex-row lg:items-baseline">
      {menu}
    </nav>
  )
}

export default Menu
