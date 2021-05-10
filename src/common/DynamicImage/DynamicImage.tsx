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
        className={`!w-full !relative !h-auto !max-h-8/10-screen ${
          props.className ? props.className : ""
        }`}
      />
    </div>
  )
}

export default DynamicImage
