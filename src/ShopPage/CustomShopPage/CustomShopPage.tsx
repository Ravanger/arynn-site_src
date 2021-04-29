import { CustomShopPropsType } from "./CustomShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import Carousel from "src/common/Carousel"
import { StrapiImageType } from "util/data.types"
import PDescriptionText from "src/common/DescriptionText"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import Button from "src/common/Button"

const CustomShopPage = (props: CustomShopPropsType) => {
  let allImagesArray: StrapiImageType[] = []

  props.customShopPieces.forEach((item) => {
    allImagesArray = allImagesArray.concat(item.images)
  })

  const selectOptions = props.customShopPieces.map((item) => (
    <option value={item.sku} key={item.sku}>
      {item.name}
    </option>
  ))

  return (
    <>
      <HeaderBar>{props.selectedPiece.name}</HeaderBar>
      <Spacer size="2rem" />
      <main className="w-full"></main>
      <Carousel images={allImagesArray} />
      <Spacer size="2rem" />
      <HeaderBar>Let's Get Started!</HeaderBar>
      <Spacer size="2rem" />
      <select
        onChange={(event) => {
          props.setSelectedPieceSku(event.target.value)
        }}
        value={props.selectedPiece.sku}
        className="w-full"
      >
        {selectOptions}
      </select>
      <Spacer size="2rem" />
      <PDescriptionText>{props.selectedPiece.description}</PDescriptionText>
      <Spacer size="2rem" />
      <span className="text-3xl font-bold md:text-right">
        {formatCurrencyString({
          value: props.selectedPiece.price,
          currency: CURRENCY,
        })}
      </span>
      <Spacer size="2rem" />
      <Button
        className={`animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none ${
          props.isInCart ? "opacity-50 text-xs" : ""
        }`}
        onClick={props.addToCartFunc}
      >
        {props.isInCart ? "Already in Cart" : "Add to Cart"}
      </Button>
    </>
  )
}

export default CustomShopPage
