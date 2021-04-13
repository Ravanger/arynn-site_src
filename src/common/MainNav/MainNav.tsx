import { IoMenu, IoTriangle } from "react-icons/io5"
import Spacer from "src/common/Spacer"
import { MainNavPropsType } from "./MainNav.types"

const MainNav = (props: MainNavPropsType) => {
  return (
    <div className="sticky z-50 top-0 text-center max-w-5xl lg:relative lg:w-full">
      <IoTriangle
        className="text-white inline-block transform translate-y-1"
        size="1.5rem"
      />
      <div
        className="bg-white w-auto text-center max-w-5xl overflow-hidden rounded-xl2 px-16 py-4 shadow-md lg:animate-none lg:rounded-xl4 lg:static lg:w-full lg:p-8"
        ref={props.mainMenuRef}
      >
        <button
          className="cursor-pointer text-center text-blue hover:text-pink w-auto inline-block align-middle animate-scaleExpandIn hover:animate-scaleExpandOut lg:hidden"
          onClick={() => props.setIsMainMenuOpen(!props.isMainMenuOpen)}
        >
          <IoMenu size="2rem" className="" />
        </button>
        <Spacer id="mainMenuSpacer" className="hidden" />
        <nav
          className={`${
            props.isMainMenuOpen ? "flex animate-growDown" : "hidden"
          } origin-top flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:flex-nowrap lg:justify-center lg:items-baseline`}
        >
          {props.mainMenu}
        </nav>
      </div>
    </div>
  )
}

export default MainNav
