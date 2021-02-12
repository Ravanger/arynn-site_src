import Button from "./Button"
import { MenuPropsType } from "./Menu.types"
import { MenuFullscreen } from "./Menu.styles"

const Menu = (props: MenuPropsType) => {
  const menu = props.menuItems.map((item) => (
    <Button text={item.text} url={item.url} key={item.text} />
  ))

  return <MenuFullscreen>{menu}</MenuFullscreen>
}

export default Menu
