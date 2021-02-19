import { createGlobalStyle, css } from "styled-components"
import { fonts } from "./fonts.styles"
import { reset } from "./reset.styles"
import { custom } from "./custom.styles"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${custom}
`

export default GlobalStyle
