import { ContentBoxProps } from "./ContentBox.types"

const ContentBox = (props: ContentBoxProps) => {
  return (
    <div className="max-w-5xl w-full rounded-xl4 bg-white text-center overflow-hidden p-16 shadow-md">
      {props.children}
    </div>
  )
}

export default ContentBox
