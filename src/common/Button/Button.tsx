import { motion } from "framer-motion"
import { ButtonProps } from "./Button.types"

const defaultProps: ButtonProps = {
  children: undefined,
  className: "",
}

const Button = (props: ButtonProps) => {
  const className = `font-bold rounded-lg p-4 w-full self-end bg-pink hover:bg-blue active:bg-blue-light text-white text-xl select-none cursor-pointer ${
    props.className ? props.className : ""
  }`

  const hover = { scale: 1.05 }
  const tap = { scale: 0.95 }
  const transition = { duration: 0.05 }

  return (
    <motion.button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={className}
      whileHover={hover}
      whileTap={tap}
      transition={transition}
    >
      {props.children}
    </motion.button>
  )
}

Button.defaultProps = defaultProps

export default Button
