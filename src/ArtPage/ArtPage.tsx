import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ArtItems from "./ArtItems"
import { ArtPageType } from "./ArtPage.types"

const ArtPage = (props: ArtPageType) => {
  const [artFilter] = useAtom(artFilterAtom)

  return (
    <>
      <HeaderBar>{artFilter || "Art"}</HeaderBar>
      <Spacer size="2rem" />
      <ArtItems artFilter={artFilter} artItems={props.artItems} />
    </>
  )
}

export default ArtPage
