import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { ArtPiecePageProps } from "./ArtPiecePage.types"
import PrevNextButton from "./PrevNextButton"
import DynamicImage from "src/common/DynamicImage"
import Button from "src/common/Button"
import Link from "next/link"

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
        <div>
          <Spacer size="2rem" />
          <HeaderBar>Available to buy!</HeaderBar>
          <Spacer size="2rem" />
          <Link href={props.item.shopItemUrl} passHref>
            <Button isLink className="block md:inline ">
              See in shop
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default ArtPiecePage
