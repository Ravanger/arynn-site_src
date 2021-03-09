import Link from "next/link"
import { PrevNextButtonProps } from "./PrevNextButton.types"
import { BsFillTriangleFill } from "react-icons/bs"

const PrevNextButton = (props: PrevNextButtonProps) => {
  return (
    <Link href={props.url} scroll={false} passHref>
      <a
        className={`text-pink hover:text-blue transform ${
          props.type === "PREV" ? "-rotate-90" : "rotate-90"
        } `}
      >
        <BsFillTriangleFill size="2rem" />
      </a>
    </Link>
  )
}

export default PrevNextButton
