import LandingMenu from "./LandingMenu"
import MainImage from "src/common/MainImage"
import { HomePageType } from "./HomePage.types"

const HomePage = (props: HomePageType) => {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-between max-w-6xl mx-auto text-center">
      <LandingMenu menuItems={props.menuItems} />
      <div className="overflow-hidden w-2/3 text-center sm:w-full lg:absolute lg:bottom-0">
        <div className="relative -bottom-2">
          <MainImage />
        </div>
      </div>
    </div>
  )
}

export default HomePage
