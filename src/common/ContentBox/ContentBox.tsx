import { DivContentBox } from "./ContentBox.styles"
import { ContentBoxProps } from "./ContentBox.types"

const ContentBox = (props: ContentBoxProps) => {
  return <DivContentBox>{props.children}</DivContentBox>
}

export default ContentBox
