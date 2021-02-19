import Image from "next/image"
import { DivBigImage } from "./BigImage.styles"
import { BigImageTypes } from "./BigImage.types"

const BigImage = (props: BigImageTypes) => {
  return (
    <DivBigImage>
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        width={800}
        height={600}
        objectFit="cover"
      />
    </DivBigImage>
  )
}

export default BigImage
