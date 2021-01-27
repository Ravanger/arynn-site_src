import MainNav from "src/common/MainNav"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps } from "./Layout.types"

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainNav />
      <Spacer />
      <ContentBox>{props.children}</ContentBox>
    </>
  )
}

export default Layout
