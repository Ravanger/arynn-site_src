import MainNav from "src/common/MainNav"
import Spacer from "src/common/Spacer"
import ContentBox from "src/common/ContentBox"
import { LayoutProps } from "../Layout.types"
import MainImage from "src/common/MainImage"
import { IoTriangle } from "react-icons/io5"

const MainLayout = (props: LayoutProps) => {
  return (
    <div className="w-full flex flex-col items-center p-8 pb-0">
      <MainNav />
      <Spacer size="2rem" />
      <ContentBox>{props.children}</ContentBox>
      <IoTriangle
        className="text-white inline-block transform -translate-y-2 rotate-180"
        size="4rem"
      />
      <Spacer size="2rem" />
      <MainImage />
    </div>
  )
}

export const getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
