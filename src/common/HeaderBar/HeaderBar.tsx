import { HeaderBarProps } from "./HeaderBar.types"

const styledHr = <hr className="flex-grow flex-shrink-0 border-1 border-blue" />

const HeaderBar = (props: HeaderBarProps) => {
  return props.children ? (
    <header
      className={`flex flex-nowrap text-center justify-center w-full items-center ${
        props.isMenu ? "text-2xl" : "text-4xl italic"
      }`}
    >
      {styledHr}
      <span className="p-4 flex-initial">{props.children}</span>
      {styledHr}
    </header>
  ) : (
    styledHr
  )
}

export default HeaderBar
