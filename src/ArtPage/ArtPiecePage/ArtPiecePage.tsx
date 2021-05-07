import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { ArtPiecePageProps } from "./ArtPiecePage.types"
import PrevNextButton from "./PrevNextButton"
import DynamicImage from "src/common/DynamicImage"
import Link from "next/link"
import { motion } from "framer-motion"

const ArtPiecePage = (props: ArtPiecePageProps) => {
  return (
    <>
      <HeaderBar>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</HeaderBar>
      <main className="w-full">
        <Spacer size="2rem" />
        <div className="flex flex-row flex-nowrap items-stretch justify-between">
          <PrevNextButton
            type="PREV"
            href={{
              pathname: `/art/${props.prevItemId}`,
              ...(props.displayAll && { query: { display: "all" } }),
            }}
          />
          <Spacer axis="HORIZONTAL" size="1rem" />
          <DynamicImage
            src={props.item.image}
            alt={props.item.title}
            quality={90}
          />
          <Spacer axis="HORIZONTAL" size="1rem" />
          <PrevNextButton
            type="NEXT"
            href={{
              pathname: `/art/${props.nextItemId}`,
              ...(props.displayAll && { query: { display: "all" } }),
            }}
          />
        </div>
        <Spacer size="2rem" />
        <HeaderBar>{props.item.title}</HeaderBar>
        <Spacer size="2rem" />
        <PDescriptionText>{props.item.description}</PDescriptionText>
      </main>

      {props.item.shopItemUrl && (
        <>
          <Spacer size="2rem" />
          <div className="w-full grid gap-4 grid-cols-4 items-center">
            <div className="flex flex-row items-center col-span-4 sm:text-right sm:col-start-3 sm:col-span-2 lg:col-start-3 lg:col-span-2">
              <HeaderBar />
              <span className="text-xl md:text-2xl font-bold pl-2">
                Available to buy!
              </span>
            </div>
            <div className="flex flex-row w-full col-span-4 sm:col-span-2 sm:col-start-3">
              <Link href={props.item.shopItemUrl} passHref>
                <motion.a
                  className="font-bold rounded-lg p-4 w-full self-end bg-pink text-white text-lg md:text-xl select-none cursor-pointer block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.05 }}
                >
                  See in shop
                </motion.a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ArtPiecePage
