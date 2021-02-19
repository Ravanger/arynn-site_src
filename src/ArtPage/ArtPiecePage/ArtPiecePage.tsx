import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import { useEffect } from "react"
import PDescriptionText from "src/common/DescriptionText"
import HeaderBar from "src/common/HeaderBar"
import ResponsiveImage from "src/common/ResponsiveImage"
import Spacer from "src/common/Spacer"
import { MainArtPiecePage } from "./ArtPiecePage.styles"
import { ArtPiecePageProps } from "./ArtPiecePage.types"

const ArtPiecePage = (props: ArtPiecePageProps) => {
  const [, setArtFilter] = useAtom(artFilterAtom)
  useEffect(() => {
    setArtFilter(props.item.type)
  }, [])

  return (
    <>
      <HeaderBar>{props.item.type}</HeaderBar>
      <MainArtPiecePage>
        <Spacer size="2rem" />
        <ResponsiveImage
          alt={props.item.title}
          src={props.item.image}
          height={600}
        />
        <Spacer size="2rem" />
        <HeaderBar>{props.item.title}</HeaderBar>
        <Spacer size="2rem" />
        <PDescriptionText>{props.item.description}</PDescriptionText>
      </MainArtPiecePage>
    </>
  )
}

export default ArtPiecePage
