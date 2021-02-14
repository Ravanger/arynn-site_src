import Image from "next/image"
import { DivArtWrapper } from "./ArtItems.styles"
import { ArtItemsType } from "./ArtItems.types"

const ArtItems = (props: ArtItemsType) => {
  const currentArtItems = props.artFilter
    ? props.artItems.filter((item) => item.type === props.artFilter)
    : props.artItems

  return (
    <DivArtWrapper>
      {currentArtItems.map((artItem, index) => (
        <div key={artItem.title + index}>
          <Image
            src={artItem.image}
            alt={artItem.title}
            layout="responsive"
            width={800}
            height={800}
            objectFit="cover"
          />
        </div>
      ))}
    </DivArtWrapper>
  )
}

export default ArtItems
