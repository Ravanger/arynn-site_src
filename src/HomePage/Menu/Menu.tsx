import Button from "./Button"
import { MenuPropsType } from "./Menu.types"

const Menu = (props: MenuPropsType) => {
  const menu = props.menuItems.map((item) => (
    <Button text={item.text} url={item.url} key={item.text} />
  ))

  return (
    <nav className="flex flex-nowrap flex-row justify-around w-full h-screen">
      {menu}
    </nav>
  )
}

export default Menu
