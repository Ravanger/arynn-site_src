import Link from "next/link"
import ResponsiveImage from "src/common/ResponsiveImage"
import { ArtItemsType } from "./ArtItems.types"

const ArtItems = (props: ArtItemsType) => {
  if (!props.artItems) return <></>

  const currentArtItems = props.artFilter
    ? props.artItems.filter(
        (item) => item.type.toUpperCase() === props.artFilter.toUpperCase()
      )
    : props.artItems

  return currentArtItems ? (
    <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {currentArtItems.map((artItem, index) => (
        <Link
          href={{
            pathname: `/art/${artItem.id}`,
            ...(!props.artFilter && { query: { display: "all" } }),
          }}
          key={artItem.id}
          scroll={false}
        >
          <a>
            <div key={artItem.title + index}>
              <ResponsiveImage src={artItem.image} alt={artItem.title} />
            </div>
          </a>
        </Link>
      ))}
    </div>
  ) : (
    <></>
  )
}

export default ArtItems
