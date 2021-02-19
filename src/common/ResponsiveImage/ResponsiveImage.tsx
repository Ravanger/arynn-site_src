import Image from "next/image"
import { BigImageTypes } from "./ResponsiveImage.types"

const ResponsiveImage = (props: BigImageTypes) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      layout="responsive"
      width={800}
      height={800}
      objectFit="cover"
    />
  )
}

export default ResponsiveImage
