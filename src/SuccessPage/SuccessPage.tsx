import Link from "next/link"
import Spacer from "src/common/Spacer"
import { SuccessPagePropType } from "./SuccessPage.types"

const SuccessPage = (props: SuccessPagePropType) => {
  return (
    <>
      <h2>Thank you for your order!</h2>
      <Spacer size="2rem" />
      <h3>Things ordered:</h3>
      {props.orderedItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Link href="/shop">
        <a className="text-pink hover:text-blue active:text-blue-light">
          Back to shop
        </a>
      </Link>
    </>
  )
}

export default SuccessPage
