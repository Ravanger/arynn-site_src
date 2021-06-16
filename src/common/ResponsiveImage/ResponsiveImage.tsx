import Image from "next/image"
import { BigImageTypes } from "./ResponsiveImage.types"

const ResponsiveImage = (props: BigImageTypes) => {
  return (
    <Image
      src={props.src || ".png"}
      alt={props.alt}
      layout="responsive"
      {...(props.isLocalImage && {
        loader: ({ src, width, quality }) =>
          `${src}?w=${width}&q=${quality || 100}`,
      })}
      width={props.width || 800}
      height={props.height || 800}
      objectFit="cover"
      className={`!bg-blue-light !bg-opacity-20 ${
        props.className ? props.className : ""
      }`}
    />
  )
}

export default ResponsiveImage
