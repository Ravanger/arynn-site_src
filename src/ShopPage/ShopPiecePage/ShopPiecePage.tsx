import ResponsiveImage from "src/common/ResponsiveImage"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { ShopPiecePageTypes } from "./ShopPiecePage.types"
import PDescriptionText from "src/common/DescriptionText"
import Button from "src/common/Button"

const ShopPiecePage = (props: ShopPiecePageTypes) => {
  const quantityOptions: React.ReactNode[] = []
  for (let i = 1; i <= props.quantity; i++) {
    quantityOptions.push(
      <option value={`quantity_${i}`} key={`quantity_${i}`}>
        {i}
      </option>
    )
  }

  return (
    <>
      <HeaderBar>{props.item.title}</HeaderBar>
      <main className="w-full">
        <Spacer size="2rem" />
        <ResponsiveImage
          src={props.item.image}
          alt={props.item.title}
          height={600}
        />
        <Spacer size="2rem" />
        <HeaderBar />
        <Spacer size="2rem" />
        <form
          method="POST"
          className="w-full grid gap-4 grid-cols-3/1 md:grid-cols-3 items-center"
        >
          <PDescriptionText className="col-span-2 md:col-span-3">
            {props.item.description}
          </PDescriptionText>
          <select
            name="quantity"
            id="quantity"
            className="md:col-start-1 md:row-start-3"
          >
            <option value="quantity_text" key="quantity_text">
              - Quantity -
            </option>
            {quantityOptions}
          </select>
          <span className="text-right text-3xl font-bold md:col-start-3">
            ${props.item.price}
          </span>
          <Button type="submit" className="col-span-2 md:col-start-3">
            Continue
          </Button>
        </form>
      </main>
    </>
  )
}

export default ShopPiecePage
