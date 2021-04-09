import { ContentBoxProps } from "./ContentBox.types"

const ContentBox = (props: ContentBoxProps) => {
  return (
    <div className="max-w-5xl w-full rounded-xl4 bg-white text-center overflow-hidden px-8 py-16 shadow-md md:px-16">
      {props.children}
    </div>
  )
}

export default ContentBox
