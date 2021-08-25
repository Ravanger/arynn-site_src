import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { SuccessPagePropType } from "./SuccessPage.types"
import { SuccessPageItem } from "./SucessPageItem/SuccessPageItem"

const SuccessPage = (props: SuccessPagePropType) => {
  return (
    <>
      <HeaderBar>Thank you!</HeaderBar>
      {props.orderedItems.length > 0 && (
        <>
          <Spacer size="2rem" />
          <div className="italic max-w-sm mx-auto">
            <h2 className="text-pink text-xl">
              {"Your order has been submitted!"}
            </h2>
            <h2 className="text-pink text-xl">
              {"Look out from emails from me!"}
            </h2>
            <Spacer size="2rem" />
            <HeaderBar hrClassName="flex-grow flex-shrink bg-blue h-0.5 border-none max-w-48 mx-auto" />
            <Spacer size="2rem" />
            <h2 className="text-pink text-xl">
              {"Here's what you ordered..."}
            </h2>
          </div>
          <Spacer size="2rem" />
          {props.orderedItems.map((item) => (
            <div key={item.customId} className="max-w-2xl mx-auto">
              <SuccessPageItem item={item} />
              <Spacer />
            </div>
          ))}
          <Spacer />
          <HeaderBar hrClassName="flex-grow flex-shrink bg-blue h-0.5 border-none max-w-48 mx-auto" />
        </>
      )}
      <Spacer />
      <div className="italic text-sm">
        <p>{"for supporting an artist like me..."}</p>
        <p>{"you automatically are cooler than everyone else!"}</p>
        <p>{"good luck with that! i'm so happy for you!"}</p>
      </div>
    </>
  )
}

export default SuccessPage
