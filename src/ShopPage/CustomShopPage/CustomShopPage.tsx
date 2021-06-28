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
  let customAddonProducts: Product[] = []
  let customNumofPeopleProducts: Product[] = []

  if (props.customShopInfo.customAddons) {
    customTypeProducts = props.customShopInfo.customAddons.types
    customAddonProducts = props.customShopInfo.customAddons.addons
    customNumofPeopleProducts = props.customShopInfo.customAddons.numberOfPeople
  }

  const customTypeOptions = customTypeProducts.map((item) => (
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
  ))

  const customNumberOfPeopleOptions = customNumofPeopleProducts.map((item) => (
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
  ))

  const customAddonOptions = customAddonProducts.map((item) => (
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
            const addonsList: Product[] =
              props.customShopInfo.customAddons.addons
            const wantedAddon = addonsList.find(
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
  ))

  const customDescription = props.customShopInfo.description

  return (
    <>
      <HeaderBar>Custom Commission</HeaderBar>
      <Spacer size="2rem" />
      <main className="w-full"></main>
      <Carousel images={props.customShopInfo.images} />
      <Spacer size="2rem" />
      <HeaderBar>{"Let's Get Started!"}</HeaderBar>
      <Spacer size="2rem" />
      <select
        onChange={(event) => {
          const itemSku = event.target.value
          const typesList: Product[] = props.customShopInfo.customAddons.types
          const wantedType = typesList.find(
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
        {customTypeOptions}
      </select>
      <select
        onChange={(event) => {
          const itemSku = event.target.value
          const numberOfPeopleList: Product[] =
            props.customShopInfo.customAddons.numberOfPeople
          const wantedNumberOfPeople = numberOfPeopleList.find(
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
        {customNumberOfPeopleOptions}
      </select>
      <fieldset className="w-full">{customAddonOptions}</fieldset>
      <Spacer size="2rem" />
      <PDescriptionText>{customDescription}</PDescriptionText>
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
          Add to Cart
        </Button>
      </div>
    </>
  )
}

export default CustomShopPage
