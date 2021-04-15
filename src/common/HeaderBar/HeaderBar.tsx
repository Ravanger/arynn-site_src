import { HeaderBarProps } from "./HeaderBar.types"

const styledHr = (className?: string) => (
  <hr
    className={className || "flex-grow flex-shrink bg-blue h-0.5 border-none"}
  />
)

const HeaderBar = (props: HeaderBarProps) => {
  return props.children ? (
    <header
      className={`flex flex-nowrap text-center justify-center w-full items-center ${
        props.className ? props.className : ""
      }`}
    >
      {styledHr(props.hrClassName)}
      <span
        className={`flex-initial px-4 sm:px-12 ${
          props.isMenu ? "text-2xl" : "italic text-2xl sm:text-4xl"
        } ${props.contentClassName ? props.contentClassName : ""}`}
      >
        {props.children}
      </span>
      {styledHr(props.hrClassName)}
    </header>
  ) : (
    styledHr(props.hrClassName)
  )
}

export default HeaderBar
