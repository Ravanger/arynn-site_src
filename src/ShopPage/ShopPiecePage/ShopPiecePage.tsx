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

  const maxSelectedQuantity: number =
    props.item.product_data.metadata.maxQuantity || 23

  const quantityOptions = [...Array(maxSelectedQuantity)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ))

  return (
    <>
      <HeaderBar>{props.item.name}</HeaderBar>
      <Spacer size="2rem" />
      <main className="w-full">
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
          <div className="flex flex-row w-full col-span-3 md:col-span-1 md:col-start-3">
            <select
              onChange={(event) => {
                props.setWantedQuantity(~~event.target.value)
              }}
              value={props.wantedQuantity}
            >
              {quantityOptions}
            </select>
            <Button
              className={`animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none ${
                props.quantityInCart ? "opacity-50" : ""
              }`}
              onClick={props.addToCartFunc}
            >
              {props.quantityInCart
                ? `${props.quantityInCart} in Cart`
                : "Add to Cart"}
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default ShopPiecePage
