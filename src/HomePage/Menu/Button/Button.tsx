import Link from "next/link"
import { MenuItemType } from "src/HomePage/HomePage.types"
import { ButtonBubble, CENTER_BUTTON_VARIABLES } from "./Button.styles"

const Button = (props: MenuItemType) => {
  return (
    <Link href={props.url} passHref>
      <ButtonBubble
        style={{
          ...(props.tailSide === "CENTER" && CENTER_BUTTON_VARIABLES),
        }}
      >
        {props.text}
      </ButtonBubble>
    </Link>
  )
}

export default Button
