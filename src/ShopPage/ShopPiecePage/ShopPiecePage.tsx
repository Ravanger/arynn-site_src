import ResponsiveImage from "src/common/ResponsiveImage"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { ShopPiecePageTypes } from "./ShopPiecePage.types"
import PDescriptionText from "src/common/DescriptionText"
import Button from "src/common/Button"

const ShopPiecePage = (props: ShopPiecePageTypes) => {
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
        <div className="w-full grid gap-4 grid-cols-3 items-center">
          <PDescriptionText className="col-span-3">
            {props.item.description}
          </PDescriptionText>
          <span className="text-3xl font-bold col-span-3 md:col-start-3 md:col-span-1 md:text-right">
            ${props.item.price}
          </span>
          <Button
            className="col-span-3 md:col-span-1 md:col-start-3"
            onClick={props.addToCartFunc}
          >
            Add to Cart
          </Button>
        </div>
      </main>
    </>
  )
}

export default ShopPiecePage
