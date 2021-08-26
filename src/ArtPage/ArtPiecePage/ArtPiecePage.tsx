import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { ArtPiecePageProps } from "./ArtPiecePage.types"
import ArtPrevNextButton from "./PrevNextButton"
import DynamicImage from "src/common/DynamicImage"
import Link from "next/link"
import { motion } from "framer-motion"

const ArtPiecePage = (props: ArtPiecePageProps) => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 w-full h-full flex mx-auto items-center max-w-[68rem]">
        <ArtPrevNextButton
          type="PREV"
          href={{
            pathname: `/art/${props.prevItemId}`,
            ...(props.displayAll && { query: { display: "all" } }),
          }}
          className="absolute left-0 sm:left-12"
        />
        <ArtPrevNextButton
          type="NEXT"
          href={{
            pathname: `/art/${props.nextItemId}`,
            ...(props.displayAll && { query: { display: "all" } }),
          }}
          className="absolute right-0 sm:right-12"
        />
      </div>
      <HeaderBar>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</HeaderBar>
      <main className="w-full relative">
        <Spacer size="2rem" />
        <div className="flex w-full justify-center">
          <DynamicImage
            src={props.item.image}
            alt={props.item.title}
            quality={100}
            priority={true}
            loading="eager"
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
