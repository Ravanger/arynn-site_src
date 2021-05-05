import { motion } from "framer-motion"
import Link from "next/link"

import { MainNavItemProps } from "./SiteLink.types"

const SiteLink = (props: MainNavItemProps) => {
  const SubLink = (
    <span
      className={`px-1 cursor-pointer whitespace-nowrap text-pink hover:text-blue ${
        props.primary ? "text-2xl font-bold" : ""
      } ${props.active ? "text-blue italic" : ""}`}
    >
      {props.text}
    </span>
  )

  return (
    <Link href={props.url ?? ""} passHref>
      {props.filter ? (
        <motion.button
          className="focus:outline-none"
          onClick={props.onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05 }}
        >
          {SubLink}
        </motion.button>
      ) : (
        <motion.a
          {...(props.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          {...(props.onClick && {
            onClick: props.onClick,
          })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05 }}
        >
          {SubLink}
          {props.external && (
            <span className="sr-only">Opens in new window</span>
          )}
        </motion.a>
      )}
    </Link>
  )
}

export default SiteLink
