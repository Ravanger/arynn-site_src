import { motion } from "framer-motion"
import { ButtonProps } from "./Button.types"

const defaultProps: ButtonProps = {
  children: undefined,
  className: "",
}

const Button = (props: ButtonProps) => {
  return (
    <motion.button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`font-bold rounded-lg p-4 w-full self-end bg-pink hover:bg-blue active:bg-blue-light text-white text-xl ${
        props.className ? props.className : ""
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
    >
      {props.children}
    </motion.button>
  )
}

Button.defaultProps = defaultProps

export default Button
