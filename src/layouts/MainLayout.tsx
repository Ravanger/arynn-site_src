import MainNav from "src/common/MainNav"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps } from "./Layout.types"

const MainLayout = (props: LayoutProps) => {
  return (
    <>
      <MainNav />
      <Spacer size="2rem" />
      <ContentBox>{props.children}</ContentBox>
    </>
  )
}

export const getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
