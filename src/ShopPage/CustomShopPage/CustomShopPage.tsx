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

  const maxSelectedQuantity: number =
    props.selectedPiece.product_data.metadata.maxQuantity || 23

  const quantityOptions = [...Array(maxSelectedQuantity)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
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
      <div className="flex flex-row">
        <select
          onChange={(event) => {
            props.setWantedQuantity(~~event.target.value)
          }}
          value={props.wantedQuantity}
        >
          {quantityOptions}
        </select>
        <Spacer axis="HORIZONTAL" />
        <Button
          className={`${
            props.quantityInCart ? "opacity-50" : ""
          } focus:outline-none`}
          onClick={props.addToCartFunc}
          disabled={props.quantityInCart > 0}
        >
          {props.quantityInCart
            ? `${props.quantityInCart} in cart`
            : "Add to Cart"}
        </Button>
      </div>
    </>
  )
}

export default CustomShopPage
