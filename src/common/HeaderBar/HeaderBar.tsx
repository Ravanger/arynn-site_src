import { HeaderBarProps } from "./HeaderBar.types"

const styledHr = (className?: string) => (
  <hr
    className={
      className || "flex-grow flex-shrink border-15 border-blue border-solid"
    }
  />
)

const HeaderBar = (props: HeaderBarProps) => {
  return props.children ? (
    <header
      className={`flex flex-nowrap text-center justify-center w-full items-center ${
        props.isMenu ? "text-2xl" : "text-4xl italic"
      } ${props.className}`}
    >
      {styledHr(props.hrClassName)}
      <span className="px-4 flex-initial">{props.children}</span>
      {styledHr(props.hrClassName)}
    </header>
  ) : (
    styledHr(props.hrClassName)
  )
}

export default HeaderBar
