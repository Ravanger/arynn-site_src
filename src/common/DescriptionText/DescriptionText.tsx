import { PDescriptionTextType } from "./PDescriptionText.types"

const defaultProps: PDescriptionTextType = {
  children: undefined,
  className: "",
}

const PDescriptionText = (props: PDescriptionTextType) => {
  return (
    <p
      className={`font-bold text-left px-4 whitespace-pre-wrap sm:p-0 sm:text-xl ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </p>
  )
}

PDescriptionText.defaultProps = defaultProps

export default PDescriptionText
