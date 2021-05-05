import LandingMenu from "./LandingMenu"
import MainImage from "src/common/MainImage"
import { HomePageType } from "./HomePage.types"
import BackgroundClouds from "src/layouts/BackgroundClouds"

const HomePage = (props: HomePageType) => {
  return (
    <div className="relative flex w-full h-screen flex-col items-center justify-between text-center overflow-hidden">
      <BackgroundClouds />
      <LandingMenu menuItems={props.menuItems} />
      <div className="overflow-hidden w-2/3 text-center sm:w-full lg:absolute lg:bottom-0">
        <div className="relative -bottom-2 max-h-6/10-screen">
          <MainImage />
        </div>
      </div>
    </div>
  )
}

export default HomePage
