import { motion } from "framer-motion"
import { IoMenu, IoTriangle } from "react-icons/io5"
import { MenuPropsType } from "./Menu.types"

const Menu = (props: MenuPropsType) => {
  return (
    <motion.div
      className={`${
        props.zindex ? props.zindex : "z-50"
      } text-center lg:max-w-5xl lg:relative lg:w-full`}
      whileHover={{ scale: props.shopMenu ? 1 : 1.1 }}
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
        } h-auto text-center rounded-xl2 lg:rounded-xl4 lg:static lg:w-full lg:p-8`}
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
        <motion.nav
          className={`${
            props.isMenuOpen ? "flex-col w-64 pb-8" : "hidden"
          } origin-top flex-col space-y-4 lg:space-y-0 lg:flex-row lg:flex-nowrap lg:justify-center lg:items-baseline`}
          role={props.role}
          variants={{
            open: { scaleY: 1, height: "auto", display: "flex" },
            closed: { scaleY: 0, height: 0, display: "hidden" },
          }}
          animate={
            props.isMobile ? (props.isMenuOpen ? "open" : "closed") : "open"
          }
          transition={{ type: "tween", duration: 0.1 }}
        >
          {props.children}
        </motion.nav>
      </div>
    </motion.div>
  )
}

export default Menu
