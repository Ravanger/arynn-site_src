import Image from "next/image"
import { BigImageTypes } from "./ResponsiveImage.types"

const ResponsiveImage = (props: BigImageTypes) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      layout="responsive"
      width={props.width || 800}
      height={props.height || 800}
      objectFit="cover"
      className={props.className ? props.className : ""}
    />
  )
}

export default ResponsiveImage
