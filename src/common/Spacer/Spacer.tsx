import { SpacerProps } from "./Spacer.types"
import { SpanSpacer } from "./Spacer.styles"

const defaultProps: SpacerProps = {
  size: "1rem",
  axis: "VERTICAL",
}

const Spacer = (props: SpacerProps) => {
  const width = props.axis === "VERTICAL" ? null : props.size
  const height = props.axis === "HORIZONTAL" ? null : props.size

  return (
    <SpanSpacer
      style={{
        ...(width && {
          ["--spacerWidth" as any]: width,
        }),
        ...(height && {
          ["--spacerHeight" as any]: height,
        }),
      }}
    />
  )
}

Spacer.defaultProps = defaultProps

export default Spacer
