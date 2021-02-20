import Link from "next/link"
import { PrevNextButtonProps } from "./PrevNextButton.types"
import { BsFillTriangleFill } from "react-icons/bs"
import {
  APrevNextButton,
  PREV_BUTTON_VARIABLES,
  NEXT_BUTTON_VARIABLES,
} from "./PrevNextButton.styles"

const PrevNextButton = (props: PrevNextButtonProps) => {
  return (
    <Link href={props.url} passHref>
      <APrevNextButton
        style={{
          ...(props.type === "PREV"
            ? PREV_BUTTON_VARIABLES
            : NEXT_BUTTON_VARIABLES),
        }}
      >
        <BsFillTriangleFill size="2rem" />
      </APrevNextButton>
    </Link>
  )
}

export default PrevNextButton
