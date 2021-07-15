import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import CartItem from "./CartItem"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { Fragment } from "react"
import Button from "src/common/Button"
import { CartPageType } from "./CartPage.types"
import Spinner from "src/common/Spinner"
import { getProductQuantityInCart } from "util/cart"

const CartPage = (props: CartPageType) => {
  return (
    <>
      <HeaderBar>Your Cart</HeaderBar>
      <Spacer size="2rem" />
      {props.cartItems.length > 0 ? (
        <>
          {props.cartItems.map((cartItem) => {
            console.log(cartItem)

            return (
              <Fragment key={cartItem.sku}>
                <CartItem
                  item={cartItem}
                  removeCartItem={() =>
                    props.setCartInfo(
                      props.removeItem(props.cartItems, cartItem)
                    )
                  }
                  setWantedQuantity={props.setWantedQuantity}
                  quantityInCart={getProductQuantityInCart(
                    props.cartItems,
                    cartItem
                  )}
                />
                <Spacer size="2rem" />
              </Fragment>
            )
          })}
          <div className="w-full md:flex md:flex-row md:justify-end">
            <div className="md:w-1/3">
              <div className="flex flex-row items-center gap-4 justify-center">
                <HeaderBar />
                <span className="text-3xl pl-2">
                  {formatCurrencyString({
                    value: props.totalPrice,
                    currency: CURRENCY,
                  })}
                </span>
              </div>
              <Spacer />
              <Button
                onClick={props.handleStripeCheckout}
                className="flex justify-center focus:outline-none md:col-start-4"
                disabled={props.stripeLoading}
              >
                {props.stripeLoading ? (
                  <Spinner />
                ) : (
                  <span className="text-base lg:text-xl">
                    Checkout {props.cartItems.length} item(s)
                  </span>
                )}
              </Button>
              <Spacer />
            </div>
          </div>
        </>
      ) : (
        <p className="text-xl italic">No items in cart</p>
      )}
    </>
  )
}

export default CartPage
