import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import { DivArtWrapper } from "./ArtItems.styles"
import { ArtItemsType } from "./ArtItems.types"

const ArtItems = (props: ArtItemsType) => {
  const currentArtItems = props.artFilter
    ? props.artItems.filter((item) => item.type === props.artFilter)
    : props.artItems

  return (
    <DivArtWrapper>
      {currentArtItems.map((artItem, index) => (
        <Link href={"/art/" + artItem.id} key={artItem.id}>
          <a>
            <div key={artItem.title + index}>
              <ResponsiveImage src={artItem.image} alt={artItem.title} />
            </div>
          </a>
        </Link>
      ))}
    </DivArtWrapper>
  )
}

export default ArtItems
