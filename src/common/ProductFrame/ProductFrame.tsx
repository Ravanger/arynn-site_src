import { CartItemFrameType } from "./ProductFrame.types"

const ProductFrame = (props: CartItemFrameType) => (
  <div
    className={`rounded-xl relative grid lg:items-center sm:border-15 sm:border-blue max-w-md mx-auto lg:max-w-none ${
      props.gap || "lg:gap-16 gap-8"
    } ${props.padding || "p-10"} ${props.rowscols || "lg:grid-cols-3"} ${
      props.className || ""
    }`}
  >
    {props.children}
  </div>
)

export default ProductFrame
