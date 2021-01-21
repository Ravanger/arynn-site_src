import { createGlobalStyle, css } from "styled-components"
import { fonts } from "./fonts.styles"
import { reset } from "./reset.styles"

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
`

export default GlobalStyle
