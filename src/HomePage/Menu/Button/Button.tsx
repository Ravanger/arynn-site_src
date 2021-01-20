import Link from "next/link"
import { MenuItemType } from "src/HomePage/HomePage.types"

const Button = (props: MenuItemType) => {
  return (
    <Link href={props.url}>
      <a>{props.text}</a>
    </Link>
  )
}

export default Button
