import HeaderBar from "../HeaderBar"
import Spacer from "../Spacer"
import { ContentBoxProps } from "./ContentBox.types"

const ContentBox = (props: ContentBoxProps) => {
  return (
    <div className="max-w-5xl w-full bg-white text-center overflow-hidden shadow-md py-8 px-4 relative z-10 sm:rounded-xl4 sm:p-16">
      {props.children}
      <Spacer size="3rem" />
      <HeaderBar />
    </div>
  )
}

export default ContentBox
