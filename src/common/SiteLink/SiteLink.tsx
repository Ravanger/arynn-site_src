import Link from "next/link"

import { MainNavItemProps } from "./SiteLink.types"

const SiteLink = (props: MainNavItemProps) => {
  const SubLink = (
    <span
      className={`px-1 cursor-pointer whitespace-nowrap text-pink hover:text-blue ${
        props.primary && "text-2xl font-bold"
      } ${props.active && "text-blue italic"}`}
    >
      {props.text}
    </span>
  )

  return (
    <Link href={props.url ?? ""} passHref scroll={false}>
      {props.filter ? (
        <button onClick={props.onClick}>{SubLink}</button>
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
          {SubLink}
        </a>
      )}
    </Link>
  )
}

export default SiteLink
