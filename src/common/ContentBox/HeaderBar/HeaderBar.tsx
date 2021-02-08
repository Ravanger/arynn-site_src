import { HeaderContentBox } from "./HeaderBar.styles"
import { HeaderBarProps } from "./HeaderBar.types"

const HeaderBar = (props: HeaderBarProps) => {
  return (
    <HeaderContentBox>
      <span>{props.children}</span>
    </HeaderContentBox>
  )
}

export default HeaderBar
