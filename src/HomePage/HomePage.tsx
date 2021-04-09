import Menu from "./Menu"
import MainImage from "src/common/MainImage"
import { HomePageType } from "./HomePage.types"

const HomePage = (props: HomePageType) => {
  return (
    <div className="flex w-screen h-screen flex-col items-center max-w-6xl mx-auto">
      <Menu menuItems={props.menuItems} />
      <div className="max-h-1/3 overflow-hidden absolute bottom-0 lg:max-h-6/10 lg:h-full">
        <MainImage />
      </div>
    </div>
  )
}

export default HomePage
