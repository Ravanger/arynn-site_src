import { ButtonProps } from "./Button.types"

const defaultProps: ButtonProps = {
  children: undefined,
  className: "",
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`font-bold rounded-lg p-4 w-full self-end bg-pink hover:bg-blue active:bg-blue-light text-white text-xl ${props.className}`}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = defaultProps

export default Button
