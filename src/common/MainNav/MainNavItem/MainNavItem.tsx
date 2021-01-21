import { MainNavItemProps } from "./MainNavItem.types"
import Link from "next/link"

const MainNavItem = (props: MainNavItemProps) => {
  return (
    <Link href={props.url ? props.url : "#"}>
      <a {...(props.external && { target: "_blank" })}>{props.text}</a>
    </Link>
  )
}

export default MainNavItem
