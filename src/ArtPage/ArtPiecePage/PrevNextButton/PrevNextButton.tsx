import Link from "next/link"
import { PrevNextButtonProps } from "./PrevNextButton.types"
import { BsFillTriangleFill } from "react-icons/bs"

const ArtPrevNextButton = (props: PrevNextButtonProps) => {
  return (
    <Link href={props.href} scroll={false} passHref>
      <a
        className={`text-pink hover:text-blue active:text-blue-light flex items-center absolute z-40 ${
          props.className || ""
        }`}
      >
        <BsFillTriangleFill
          size="2rem"
          className={`transform m-8 ${
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

export default ArtPrevNextButton
