import { artFilterAtom } from "atoms/store"
import { useAtom } from "jotai"
import HeaderBar from "src/common/ContentBox/HeaderBar"
import Spacer from "src/common/Spacer"

const ArtPage = () => {
  const [artFilter] = useAtom(artFilterAtom)

  return (
    <>
      <HeaderBar>Art</HeaderBar>
      <Spacer size="2rem" />
      {artFilter ? artFilter : "Art"}
    </>
  )
}

export default ArtPage
