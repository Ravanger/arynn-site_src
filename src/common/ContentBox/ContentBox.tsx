import { ContentBoxProps } from "./ContentBox.types"

const ContentBox = (props: ContentBoxProps) => {
  return (
    <div className="max-w-5xl w-full rounded-xl2 bg-white p-16 overflow-hidden">
      {props.children}
    </div>
  )
}

export default ContentBox
