import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { SplitAndCapitalizeFirstWord } from "util/text"
import ArtItems from "./ArtItems"
import { ArtPageType } from "./ArtPage.types"

const ArtPage = (props: ArtPageType) => {
  return (
    <>
      <HeaderBar>
        {SplitAndCapitalizeFirstWord(props.artFilter, "_") || "Art"}
      </HeaderBar>
      <Spacer size="2rem" />
      <ArtItems artFilter={props.artFilter} artItems={props.artItems} />
    </>
  )
}

export default ArtPage
