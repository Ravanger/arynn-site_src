import { CustomShopPropsType } from "./CustomShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import Carousel from "src/common/Carousel"
import PDescriptionText from "src/common/DescriptionText"
import { formatCurrencyString, Product } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import Button from "src/common/Button"

const CustomShopPage = (props: CustomShopPropsType) => {
  let customTypeProducts: Product[] = []
  let customNumofPeopleProducts: Product[] = []
  let customAddonProducts: Product[] = []

  if (props.customShopInfo.customData) {
    customTypeProducts = [
      ...props.customShopInfo.customData.availableAddons.types,
    ]
    customNumofPeopleProducts = [
      ...props.customShopInfo.customData.availableAddons.numberOfPeople,
    ]
    customAddonProducts = [
      ...props.customShopInfo.customData.availableAddons.addons,
    ]
  }

  const customTypesSelect = (
    <select
      onChange={(event) => {
        const itemSku = event.target.value
        const wantedType = customTypeProducts.find(
          (typeItem) => typeItem.sku === itemSku
        )
        wantedType &&
          props.setSelectedCustomAddons({
            ...props.selectedCustomAddons,
            type: wantedType,
          })
      }}
      value={props.selectedCustomAddons.type.sku}
      className="w-full"
    >
      {customTypeProducts.map((item) => (
        <option value={item.sku} key={item.sku}>
          {`${item.name} ${
            item.price
              ? `(+${formatCurrencyString({
                  value: item.price,
                  currency: CURRENCY,
                })})`
              : ""
          }`}
        </option>
      ))}
    </select>
  )

  const customNumberOfPeopleSelect = (
    <select
      onChange={(event) => {
        const itemSku = event.target.value
        const wantedNumberOfPeople = customNumofPeopleProducts.find(
          (typeItem) => typeItem.sku === itemSku
        )

        wantedNumberOfPeople &&
          props.setSelectedCustomAddons({
            ...props.selectedCustomAddons,
            numberOfPeople: wantedNumberOfPeople,
          })
      }}
      value={props.selectedCustomAddons.numberOfPeople.sku}
      className="w-full"
    >
      {customNumofPeopleProducts.map((item) => (
        <option value={item.sku} key={item.sku}>
          {`${item.name} ${
            item.price
              ? `(+${formatCurrencyString({
                  value: item.price,
                  currency: CURRENCY,
                })})`
              : ""
          }`}
        </option>
      ))}
    </select>
  )

  const customAddonCheckboxes = (
    <fieldset className="w-full">
      {customAddonProducts.map((item) => (
        <label key={item.sku}>
          <input
            type="checkbox"
            name="custom-addons"
            value={item.sku}
            checked={props.selectedCustomAddons.addons.includes(item)}
            onChange={(event) => {
              const isChecked = event.target.checked
              const itemSku = event.target.value
              const selectedAddons = [...props.selectedCustomAddons.addons]

              const index = selectedAddons.findIndex(
                (arrayItem) => arrayItem.sku === itemSku
              )
              const isInArray = index !== -1

              if (isChecked && !isInArray) {
                const wantedAddon = customAddonProducts.find(
                  (addonItem) => addonItem.sku === itemSku
                )

                wantedAddon && selectedAddons.push(wantedAddon)
              }

              if (!isChecked && isInArray) {
                selectedAddons.splice(index, 1)
              }

              props.setSelectedCustomAddons({
                ...props.selectedCustomAddons,
                addons: selectedAddons,
              })
            }}
          />
          {`${item.name} (+${formatCurrencyString({
            value: item.price,
            currency: CURRENCY,
          })})`}
        </label>
      ))}
    </fieldset>
  )

  const customDescription = props.customShopInfo.description

  return (
    <>
      <HeaderBar>Custom Commission</HeaderBar>
      <Spacer size="2rem" />
      <main className="w-full"></main>
      <Carousel images={props.customShopInfo.images!} />
      <Spacer size="2rem" />
      <HeaderBar>{"Let's Get Started!"}</HeaderBar>
      <Spacer size="2rem" />
      {customTypesSelect}
      {customNumberOfPeopleSelect}
      {customAddonCheckboxes}
      <Spacer size="2rem" />
      <PDescriptionText>{customDescription}</PDescriptionText>
      <Spacer size="2rem" />
      <textarea
        placeholder="Enter any further details here..."
        name="custom_product_details"
        id="custom_product_details"
        className="focus:border-pink w-full"
        value={props.customProductDetails}
        onChange={(event) => {
          props.setCustomProductDetails(event.target.value)
        }}
      />
      <Spacer size="2rem" />
      <span className="text-3xl font-bold md:text-right">
        {formatCurrencyString({
          value: props.totalPrice,
          currency: CURRENCY,
        })}
      </span>
      <Spacer size="2rem" />
      <div className="flex flex-row">
        <Spacer axis="HORIZONTAL" />
        <Button className="focus:outline-none" onClick={props.addToCartFunc}>
          {props.quantityInCart
            ? `${props.quantityInCart} in Cart`
            : "Add to Cart"}
        </Button>
      </div>
    </>
  )
}

export default CustomShopPage
