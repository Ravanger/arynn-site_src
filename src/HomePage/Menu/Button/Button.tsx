import Link from "next/link"
import { MenuItemType } from "util/data.types"

const Button = (props: MenuItemType) => {
  return (
    <Link href={props.url} passHref>
      <a className="bg-white text-pink hover:text-blue text-4xl min-w-64 w-64 h-32 flex justify-center items-center rounded-xl4 shadow-md">
        {props.text}
      </a>
    </Link>
  )
}

export default Button
