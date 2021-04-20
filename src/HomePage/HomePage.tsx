import Menu from "./Menu"
import MainImage from "src/common/MainImage"
import { HomePageType } from "./HomePage.types"

const HomePage = (props: HomePageType) => {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-between max-w-6xl mx-auto text-center">
      <Menu menuItems={props.menuItems} />
      <div className="overflow-hidden w-2/3 text-center sm:w-full lg:absolute lg:bottom-0">
        <MainImage />
      </div>
    </div>
  )
}

export default HomePage
