import Link from "next/link"
import { PrevNextButtonProps } from "./PrevNextButton.types"
import { BsFillTriangleFill } from "react-icons/bs"

const PrevNextButton = (props: PrevNextButtonProps) => {
  return (
    <Link href={props.href} scroll={false} passHref>
      <a className="text-pink hover:text-blue active:text-blue-light flex items-center">
        <BsFillTriangleFill
          size="2rem"
          className={`transform ${
            props.type === "PREV" ? "-rotate-90" : "rotate-90"
          }`}
        />
        <span className="sr-only">
          {props.type === "PREV" ? "Previous image" : "Next image"}
        </span>
      </a>
    </Link>
  )
}

export default PrevNextButton
