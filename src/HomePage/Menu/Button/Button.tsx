import Link from "next/link"
import { MenuItemType } from "src/HomePage/HomePage.types"
import { ButtonBubble } from "./Button.styles"

const Button = (props: MenuItemType) => {
  return (
    <Link href={props.url} passHref>
      <ButtonBubble isCenterButton={props.tailSide === "CENTER"}>
        {props.text}
      </ButtonBubble>
    </Link>
  )
}

export default Button
