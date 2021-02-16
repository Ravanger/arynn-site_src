import { HeaderContentBox, HrHeader } from "./HeaderBar.styles"
import { HeaderBarProps } from "./HeaderBar.types"

const HeaderBar = (props: HeaderBarProps) => {
  return props.children ? (
    <HeaderContentBox>
      <span>{props.children}</span>
    </HeaderContentBox>
  ) : (
    <HrHeader />
  )
}

export default HeaderBar
