import Link from "next/link"
import { MenuItemType } from "src/HomePage/HomePage.types"

const Button = (props: MenuItemType) => {
  return (
    <Link href={props.url} passHref>
      <a
        className={`bg-white text-pink hover:text-blue text-4xl min-w-64 w-64 h-32 flex justify-center items-center rounded-3xl z-10 lg:relative ${
          props.isButtonTop ? "lg:top-15p" : "lg:top-1/3"
        }`}
      >
        {props.text}
      </a>
    </Link>
  )
}

export default Button
