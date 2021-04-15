import Link from "next/link"

import { MainNavItemProps } from "./SiteLink.types"

const SiteLink = (props: MainNavItemProps) => {
  const SubLink = (
    <span
      className={`animate-scaleExpandIn hover:animate-scaleExpandOut px-1 cursor-pointer whitespace-nowrap text-pink hover:text-blue ${
        props.primary && "text-2xl font-bold"
      } ${props.active && "text-blue italic"}`}
    >
      {props.text}
    </span>
  )

  return (
    <Link href={props.url ?? ""} passHref scroll={false}>
      {props.filter ? (
        <button
          className="animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none"
          onClick={props.onClick}
        >
          {SubLink}
        </button>
      ) : (
        <a
          {...(props.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          {...(props.onClick && {
            onClick: props.onClick,
          })}
          className="animate-scaleExpandIn hover:animate-scaleExpandOut"
        >
          {SubLink}
        </a>
      )}
    </Link>
  )
}

export default SiteLink
