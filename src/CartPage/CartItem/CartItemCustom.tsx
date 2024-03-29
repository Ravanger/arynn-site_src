import CartItemBase from "./CartItemBase"
import { CartItemCustomType, CustomPropertyType } from "./CartItem.types"
import Spacer from "src/common/Spacer"
import HeaderBar from "src/common/HeaderBar"
import ProductFrame from "src/common/ProductFrame"
import { formatCurrencyString } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import { useMemo } from "react"

const CustomProperty = (props: CustomPropertyType) => {
  return (
    <p>
      <span className="font-bold">{props.title}:</span>{" "}
      <span className="italic">
        {props.description.length > 0 ? props.description : "None"}
      </span>
      {props.price
        ? ` (+${formatCurrencyString({
            value: props.price,
            currency: CURRENCY,
          })})`
        : null}
    </p>
  )
}

CustomProperty.defaultProps = { price: 0 }

const CartItemCustom = (props: CartItemCustomType) => {
  const totalPrice = useMemo(() => {
    try {
      return (
        props.item.price +
        props.item.customData!.selectedAddons.extended_option.price +
        props.item.customData!.selectedAddons.type.price +
        props.item.customData!.selectedAddons.addons.reduce(
          (addonTotal, addonItem) => {
            return (addonTotal += addonItem.price)
          },
          0
        )
      )
    } catch (error) {
      console.error(error)
      const emptyCart = props.cartItems
      emptyCart.length = 0
      props.setCartItems(emptyCart)
      return 0
    }
  }, [props])

  try {
    return (
      <ProductFrame>
        <CartItemBase {...props} isCustom={true} />
        <div className="flex flex-col items-center lg:col-start-3 lg:items-end">
          <div className="text-left">
            <CustomProperty
              title="Type"
              description={props.item.customData!.selectedAddons.type.name}
              price={props.item.customData!.selectedAddons.type.price}
            />
            <CustomProperty
              title="Selected option"
              description={
                props.item.customData!.selectedAddons.extended_option.name
              }
              price={
                props.item.customData!.selectedAddons.extended_option.price
              }
            />
            <CustomProperty
              title="Selected addons"
              description={props.item.customData!.selectedAddons.addons.map(
                (item, index) => (index ? ", " : "") + item.name
              )}
              price={props.item.customData!.selectedAddons.addons.reduce(
                (addonTotal, addonItem) => {
                  return (addonTotal += addonItem.price)
                },
                0
              )}
            />
            <CustomProperty
              title="Message"
              description={props.item.customData!.customMessage || "None"}
            />
          </div>
          <Spacer />
          <div className="flex flex-row items-center justify-center lg:w-full">
            <HeaderBar hrClassName="hidden flex-grow flex-shrink bg-blue h-0.5 border-none lg:block" />
            <span className="text-3xl lg:pl-4">
              {formatCurrencyString({
                value: totalPrice,
                currency: CURRENCY,
              })}
            </span>
          </div>
        </div>
      </ProductFrame>
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export default CartItemCustom
