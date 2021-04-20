import Image from "next/image"
import { DynamicImageTypes } from "./DynamicImage.types"

const DynamicImage = (props: DynamicImageTypes) => {
  return (
    <div className="relative w-full children:relative">
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        className={`w-full relative h-auto ${
          props.className ? props.className : ""
        }`}
      />
    </div>
  )
}

export default DynamicImage
