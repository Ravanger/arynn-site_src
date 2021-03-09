import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import { ArtItemsType } from "./ArtItems.types"

const ArtItems = (props: ArtItemsType) => {
  const currentArtItems = props.artFilter
    ? props.artItems.filter((item) => item.type === props.artFilter)
    : props.artItems

  return (
    <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {currentArtItems.map((artItem, index) => (
        <Link href={"/art/" + artItem.id} key={artItem.id} scroll={false}>
          <a>
            <div key={artItem.title + index}>
              <ResponsiveImage src={artItem.image} alt={artItem.title} />
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default ArtItems
