import ResponsiveImage from "src/common/ResponsiveImage"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import { ShopPiecePageTypes } from "./ShopPiecePage.types"
import { MainShopPiece } from "./ShopPiecePage.styles"
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

  const quantitySelect = (
    <select name="quantity" id="quantity">
      <option value="quantity_text" key="quantity_text">
        - Quantity -
      </option>
      {quantityOptions}
    </select>
  )

  return (
    <>
      <HeaderBar>{props.item.title}</HeaderBar>
      <MainShopPiece>
        <Spacer size="2rem" />
        <ResponsiveImage
          src={props.item.image}
          alt={props.item.title}
          height={600}
        />
        <Spacer size="2rem" />
        <HeaderBar />
        <Spacer size="2rem" />
        <form method="POST">
          <PDescriptionText>{props.item.description}</PDescriptionText>
          <span>${props.item.price}</span>
          {quantitySelect}
          <Button type="submit">Continue</Button>
        </form>
      </MainShopPiece>
    </>
  )
}

export default ShopPiecePage
