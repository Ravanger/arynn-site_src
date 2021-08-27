import { CustomShopPropsType } from "./CustomShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import Carousel from "src/common/Carousel"
import PDescriptionText from "src/common/DescriptionText"
import { formatCurrencyString, Product } from "use-shopping-cart"
import { CURRENCY } from "util/stripe"
import Button from "src/common/Button"
import { ExtendedOptionsProductType } from "util/data.types"

const CustomShopPage = (props: CustomShopPropsType) => {
  let customTypeProducts: ExtendedOptionsProductType[] = []
  let customTypeExtendedOptionsProducts: Product[] = []
  let customAddonProducts: Product[] = []

  if (props.customShopInfo.customData) {
    customTypeProducts = [
      ...props.customShopInfo.customData.availableAddons.types,
    ]
    customTypeExtendedOptionsProducts = [
      ...props.selectedCustomAddons.type!.extended_options,
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
            extended_option: wantedType.extended_options[0],
          })
      }}
      value={props.selectedCustomAddons.type!.sku}
      className="w-full"
    >
      {customTypeProducts.map((item) => (
        <option value={item.sku} key={item.sku}>
          {`${item.name} ${`(${formatCurrencyString({
            value: item.price + props.customShopInfo.price,
            currency: CURRENCY,
          })})`}`}
        </option>
      ))}
    </select>
  )

  const customExtendedOptionsSelect = (
    <select
      onChange={(event) => {
        const itemSku = event.target.value
        const wantedExtendedOption = customTypeExtendedOptionsProducts.find(
          (extendedOption) => extendedOption.sku === itemSku
        )

        wantedExtendedOption &&
          props.setSelectedCustomAddons({
            ...props.selectedCustomAddons,
            extended_option: wantedExtendedOption,
          })
      }}
      value={props.selectedCustomAddons.extended_option!.sku}
      className="w-full"
    >
      {customTypeExtendedOptionsProducts.map((item) => (
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
    <fieldset className="w-full flex justify-around">
      {customAddonProducts.map((item) => (
        <label key={item.sku}>
          <input
            type="checkbox"
            name="custom-addons"
            value={item.sku}
            checked={props.selectedCustomAddons.addons?.includes(item)}
            onChange={(event) => {
              if (!props.selectedCustomAddons.addons) return

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
          {` ${item.name} (+${formatCurrencyString({
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
      <Carousel images={props.customShopInfo.images!} />
      <Spacer size="2rem" />
      <HeaderBar>{"Let's Get Started!"}</HeaderBar>
      <Spacer size="2rem" />
      <div className="w-full grid gap-4 grid-cols-7 items-center">
        <PDescriptionText className="col-span-7 text-center row-span-1">
          {customDescription}
          <Spacer />
        </PDescriptionText>

        {/* Form */}
        <div className="col-span-5 col-start-2 row-span-1">
          {customTypesSelect}
          <Spacer />
          {customExtendedOptionsSelect}
          <Spacer />
          {customAddonCheckboxes}
          <Spacer />
          <textarea
            placeholder="Describe your vision!"
            name="custom_product_details"
            id="custom_product_details"
            className="focus:border-pink w-full"
            rows={4}
            value={props.customProductDetails}
            onChange={(event) => {
              props.setCustomProductDetails(event.target.value)
            }}
          />
        </div>

        {/* Price */}
        <div className="flex flex-row items-center col-span-3 col-start-5 row-span-1">
          <HeaderBar />
          <span className="text-3xl font-bold pl-2">
            {formatCurrencyString({
              value: props.totalPrice,
              currency: CURRENCY,
            })}
          </span>
        </div>

        {/* Button */}
        <div className="col-span-3 col-start-5 row-span-1">
          <Button className="focus:outline-none" onClick={props.addToCartFunc}>
            {props.quantityInCart
              ? `${props.quantityInCart} in Cart`
              : "Add to Cart"}
          </Button>
        </div>
      </div>
    </>
  )
}

export default CustomShopPage
