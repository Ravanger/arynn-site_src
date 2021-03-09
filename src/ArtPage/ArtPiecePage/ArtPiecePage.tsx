import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import { useEffect } from "react"
import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { ArtPiecePageProps } from "./ArtPiecePage.types"
import PrevNextButton from "./PrevNextButton"

// TODO: Take art type into consideration when clicking prev/next buttons

const ArtPiecePage = (props: ArtPiecePageProps) => {
  const [, setArtFilter] = useAtom(artFilterAtom)
  useEffect(() => {
    setArtFilter(props.item.type)
  }, [props.item.type])

  return (
    <>
      <HeaderBar>{props.item.type}</HeaderBar>
      <main className="w-full">
        <Spacer size="2rem" />
        <div className="flex flex-row flex-nowrap items-center justify-between">
          <PrevNextButton type="PREV" url={`/art/${props.prevItemId}`} />
          <Spacer axis="HORIZONTAL" size="1rem" />
          <div className="w-full">
            <ResponsiveImage
              alt={props.item.title}
              src={props.item.image}
              height={600}
            />
          </div>
          <Spacer axis="HORIZONTAL" size="1rem" />
          <PrevNextButton type="NEXT" url={`/art/${props.nextItemId}`} />
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
