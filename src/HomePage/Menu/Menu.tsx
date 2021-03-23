import React from "react"
import Spacer from "src/common/Spacer"
import Button from "./Button"
import { MenuPropsType } from "./Menu.types"

const Menu = (props: MenuPropsType) => {
  const menu = props.menuItems.map((item) => {
    const isButtonTop = item.text === "Shop"
    return (
      <React.Fragment key={item.text}>
        <Spacer size="0.5rem" />
        <Button text={item.text} url={item.url} isButtonTop={isButtonTop} />
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
