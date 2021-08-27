import Image from "next/image"
import ProductFrame from "src/common/ProductFrame"
import Spacer from "src/common/Spacer"
import { SuccessPageItemType } from "./SuccessPageItem.types"

export const SuccessPageItem = (props: SuccessPageItemType) => (
  <ProductFrame
    gap="lg:gap-8 gap-4"
    padding="p-6"
    rowscols="grid-rows-[0.8fr,auto,auto] lg:grid-cols-[0.5fr,1fr,0.2fr] lg:grid-rows-1"
  >
    {props.item.image && (
      <Image
        src={props.item.image.split("/").pop() || ""}
        alt={props.item.name}
        layout="responsive"
        objectFit="cover"
        width={600}
        height={600}
        className="!bg-blue-light !bg-opacity-20"
      />
    )}
    <div className="flex flex-col text-sm lg:text-left">
      <h3 className="font-bold">{props.item.name}</h3>
      <p>{props.item.description}</p>
      {props.item.customData && (
        <div>
          <Spacer />
          {props.item.customData.selectedAddons.type.name && (
            <p>{props.item.customData?.selectedAddons.type.name}</p>
          )}
          {props.item.customData.selectedAddons.extended_option.name && (
            <p>{props.item.customData?.selectedAddons.extended_option.name}</p>
          )}
          {props.item.customData.selectedAddons.addons.length > 0 && (
            <p>
              {props.item.customData?.selectedAddons.addons.map(
                (item, index) => (
                  <span key={index}>{(index ? ", " : "") + item.name}</span>
                )
              )}
            </p>
          )}
          {props.item.customData.customMessage && (
            <p className="italic">{`"${props.item.customData?.customMessage}"`}</p>
          )}
        </div>
      )}
    </div>
    <div className="font-bold">{props.item.quantity}</div>
  </ProductFrame>
)

export default SuccessPageItem
