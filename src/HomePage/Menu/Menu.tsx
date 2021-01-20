import Button from "./Button"
import { MenuPropsType } from "./Menu.types"

const Menu = (props: MenuPropsType) => {
  const menu = props.menuItems.map((item) => (
    <Button text={item.text} side={item.side} url={item.url} key={item.text} />
  ))

  return <nav>{menu}</nav>
}

export default Menu
