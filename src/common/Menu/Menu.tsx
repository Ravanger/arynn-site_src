import { IoMenu, IoTriangle } from "react-icons/io5"
import { MenuPropsType } from "./Menu.types"

const Menu = (props: MenuPropsType) => {
  return (
    <div
      className={`animate-scaleExpandIn hover:animate-scaleExpandOut ${
        props.shopMenu ? "lg:animate-none lg:hover:animate-none" : ""
      } ${
        props.zindex ? props.zindex : "z-50"
      } text-center lg:max-w-5xl lg:relative lg:w-full`}
    >
      <IoTriangle
        className={`${
          props.shopMenu ? "text-pink lg:hidden" : "text-white"
        } inline-block transform translate-y-1`}
        size="1.5rem"
      />
      <div
        className={`${
          props.shopMenu ? "bg-pink lg:bg-white" : "bg-white shadow-md"
        } text-center rounded-xl2 lg:rounded-xl4 lg:static lg:w-full lg:p-8`}
        ref={props.menuRef}
      >
        <button
          className={`${
            props.shopMenu ? "text-white" : "text-blue hover:text-pink"
          } w-32 h-16 focus:outline-none lg:hidden`}
          onClick={() => props.setMenuOpen(!props.isMenuOpen)}
        >
          <IoMenu size="2rem" className="w-full" />
        </button>
        <nav
          className={`${
            props.isMenuOpen ? "flex animate-growDown w-64 pb-8" : "hidden"
          } origin-top flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:flex-nowrap lg:justify-center lg:items-baseline`}
          role={props.role}
        >
          {props.children}
        </nav>
      </div>
    </div>
  )
}

export default Menu
