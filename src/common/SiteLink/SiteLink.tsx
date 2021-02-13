import Link from "next/link"

import { MainNavItemProps } from "./SiteLink.types"
import {
  PRIMARY_LINK_VARIABLES,
  CURRENT_LINK_VARIABLES,
  SpanLink,
} from "./SiteLink.styles"

const SiteLink = (props: MainNavItemProps) => {
  const SubLink = (isFilter = false) => (
    <SpanLink
      style={{
        ...(props.primary && PRIMARY_LINK_VARIABLES),
        ...(props.active && CURRENT_LINK_VARIABLES),
      }}
    >
      {props.text}
    </SpanLink>
  )

  return (
    <Link href={props.url ?? ""} passHref>
      {props.filter ? (
        <button onClick={props.onClick}>{SubLink(true)}</button>
      ) : (
        <a
          {...(props.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          {...(props.onClick && {
            onClick: props.onClick,
          })}
        >
          {SubLink(false)}
        </a>
      )}
    </Link>
  )
}

export default SiteLink
