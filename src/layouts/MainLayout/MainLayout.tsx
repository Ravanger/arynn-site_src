import MainNav from "src/common/MainNav"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps } from "../Layout.types"
import { DivWrapper } from "./MainLayout.styles"

// TODO: Add image to footer

const MainLayout = (props: LayoutProps) => {
  return (
    <DivWrapper>
      <Spacer size="2rem" />
      <MainNav />
      <Spacer size="2rem" />
      <ContentBox>{props.children}</ContentBox>
      <Spacer size="2rem" />
    </DivWrapper>
  )
}

export const getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
