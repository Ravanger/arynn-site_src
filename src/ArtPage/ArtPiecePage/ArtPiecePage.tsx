import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { SplitAndCapitalizeFirstWord } from "util/text"
import { ArtPiecePageProps } from "./ArtPiecePage.types"
import PrevNextButton from "./PrevNextButton"

const ArtPiecePage = (props: ArtPiecePageProps) => {
  return (
    <>
      <HeaderBar>{SplitAndCapitalizeFirstWord(props.item.type, "_")}</HeaderBar>
      <main className="w-full">
        <Spacer size="2rem" />
        <div className="flex flex-row flex-nowrap items-center justify-between">
          <PrevNextButton
            type="PREV"
            href={{
              pathname: `/art/${props.prevItemId}`,
              ...(props.displayAll && { query: { display: "all" } }),
            }}
          />
          <Spacer axis="HORIZONTAL" size="1rem" />
          <div className="w-full">
            <ResponsiveImage
              alt={props.item.title}
              src={props.item.image}
              height={600}
            />
          </div>
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
    </>
  )
}

export default ArtPiecePage
