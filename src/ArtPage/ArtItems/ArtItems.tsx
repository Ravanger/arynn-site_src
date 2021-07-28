import { motion } from "framer-motion"
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
    <div className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {currentArtItems.map((artItem, index) => (
        <Link
          href={{
            pathname: `/art/${artItem.id}`,
            ...(!props.artFilter && { query: { display: "all" } }),
          }}
          key={artItem.title + index}
          passHref
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.05 }}
            className="cursor-pointer"
          >
            <ResponsiveImage
              src={artItem.image}
              alt={artItem.title}
              width={500}
              height={500}
            />
          </motion.a>
        </Link>
      ))}
    </div>
  ) : (
    <></>
  )
}

export default ArtItems
