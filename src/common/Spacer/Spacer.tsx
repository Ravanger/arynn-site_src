import { SpacerProps } from "./Spacer.types"

const defaultProps: SpacerProps = {
  size: "1rem",
  axis: "VERTICAL",
}

const Spacer = (props: SpacerProps) => {
  const width = props.axis === "VERTICAL" ? null : props.size
  const height = props.axis === "HORIZONTAL" ? null : props.size

  return (
    <span
      className="block w-1 h-1 min-h-1 min-w-1"
      style={{
        ...(width && { width: width }),
        ...(height && { height: height }),
      }}
    />
  )
}

Spacer.defaultProps = defaultProps

export default Spacer
