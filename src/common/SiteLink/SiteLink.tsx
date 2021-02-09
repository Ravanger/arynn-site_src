import Link from "next/link"
import { useRouter } from "next/router"

import { MainNavItemProps } from "./SiteLink.types"
import {
  AMenuLink,
  PRIMARY_LINK_VARIABLES,
  CURRENT_LINK_MAIN_VARIABLES,
} from "./SiteLink.styles"

const SiteLink = (props: MainNavItemProps) => {
  const router = useRouter()

  return (
    <Link href={props.url ?? ""} passHref>
      <AMenuLink
        {...(props.external && { target: "_blank" })}
        {...(props.onClick && {
          onClick: props.onClick,
        })}
        style={{
          ...(props.primary && PRIMARY_LINK_VARIABLES),
          ...((router.pathname === props.url || props.active) &&
            CURRENT_LINK_MAIN_VARIABLES),
        }}
      >
        {props.text}
      </AMenuLink>
    </Link>
  )
}

export default SiteLink
