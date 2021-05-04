import Image from "next/image"
import { DynamicImageTypes } from "./DynamicImage.types"

const DynamicImage = (props: DynamicImageTypes) => {
  return (
    <div className="dynamicimage relative w-full">
      <Image
        src={props.src}
        alt={props.alt}
        quality={props.quality || 60}
        layout="fill"
        objectFit="contain"
        className={`${props.className ? props.className : ""}`}
      />
    </div>
  )
}

export default DynamicImage
