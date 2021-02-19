import { ButtonBig } from "./Button.styles"
import { ButtonProps } from "./Button.types"

const Button = (props: ButtonProps) => {
  return <ButtonBig type={props.type}>{props.children}</ButtonBig>
}

export default Button
