import { CartItemType } from "./CartItem.types"
import CartItemBase from "./CartItemBase"
import { CURRENCY } from "util/stripe"
import { formatCurrencyString } from "use-shopping-cart"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ProductFrame from "src/common/ProductFrame"

const CartItem = (props: CartItemType) => {
  const maxSelectedQuantity: number =
    props.item.product_data?.metadata.maxQuantity || 23

  const quantityOptions = [...Array(maxSelectedQuantity)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ))

  return (
    <ProductFrame>
      <CartItemBase {...props} />
      <div className="flex flex-col items-center lg:col-start-3 lg:items-end">
        <select
          value={props.quantityInCart}
          onChange={(event) => {
            props.setCartItems(
              props.setWantedQuantity(
                props.cartItems,
                props.item,
                ~~event.target.value
              )
            )
          }}
        >
          {quantityOptions}
        </select>
        <Spacer />
        <div className="flex flex-row items-center justify-center lg:w-full">
          <HeaderBar hrClassName="hidden flex-grow flex-shrink bg-blue h-0.5 border-none lg:block" />
          <span className="text-3xl lg:pl-4">
            {formatCurrencyString({
              value: props.item.price * (props.quantityInCart || 1),
              currency: CURRENCY,
            })}
          </span>
        </div>
      </div>
    </ProductFrame>
  )
}

export default CartItem
