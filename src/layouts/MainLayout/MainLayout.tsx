import MainNav from "src/common/MainNav"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps } from "../Layout.types"
import MainImage from "src/common/MainImage"

// TODO: Add image to footer

const MainLayout = (props: LayoutProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Spacer size="2rem" />
      <MainNav />
      <Spacer size="2rem" />
      <ContentBox>{props.children}</ContentBox>
      <Spacer size="2rem" />
      <MainImage />
    </div>
  )
}

export const getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
