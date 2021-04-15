import { PDescriptionTextType } from "./PDescriptionText.types"

const defaultProps: PDescriptionTextType = {
  children: undefined,
  className: "",
}

const PDescriptionText = (props: PDescriptionTextType) => {
  return (
    <p
      className={`font-bold text-justify sm:text-xl ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </p>
  )
}

PDescriptionText.defaultProps = defaultProps

export default PDescriptionText
