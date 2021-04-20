import ResponsiveImage from "src/common/ResponsiveImage"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { ShopPiecePageTypes } from "./ShopPiecePage.types"
import PDescriptionText from "src/common/DescriptionText"
import Button from "src/common/Button"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { StrapiImageType } from "util/data.types"
import Carousel from "src/common/Carousel"
import DynamicImage from "src/common/DynamicImage"

const ShopPiecePage = (props: ShopPiecePageTypes) => {
  const shopPieceImages = props.item.images as StrapiImageType[]
  const isMultipleImages = shopPieceImages && shopPieceImages.length > 1

  return (
    <>
      <HeaderBar>{props.item.name}</HeaderBar>
      <main className="w-full">
        <Spacer size="2rem" />
        {isMultipleImages ? (
          <Carousel images={shopPieceImages} />
        ) : (
          <DynamicImage src={props.item.image!} alt={props.item.name} />
        )}
        <Spacer size="2rem" />
        <HeaderBar />
        <Spacer size="2rem" />
        <div className="w-full grid gap-4 grid-cols-3 items-center">
          <PDescriptionText className="col-span-3">
            {props.item.description}
          </PDescriptionText>
          <span className="text-3xl font-bold col-span-3 md:col-start-3 md:col-span-1 md:text-right">
            {formatCurrencyString({
              value: props.item.price,
              currency: CURRENCY,
            })}
          </span>
          <Button
            className={`col-span-3 md:col-span-1 md:col-start-3 animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none ${
              props.isInCart ? "opacity-50 text-xs" : ""
            }`}
            onClick={props.addToCartFunc}
          >
            {props.isInCart ? "Already in Cart" : "Add to Cart"}
          </Button>
        </div>
      </main>
    </>
  )
}

export default ShopPiecePage
