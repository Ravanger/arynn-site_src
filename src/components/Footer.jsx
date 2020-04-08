import React from "react"

import styled from "styled-components"
import SocialsMenu from "./SocialsMenu"

const StyledFooter = styled.footer`
  text-align: center;
  font-family: Helvetica, Arial, sans - serif;
  font-size: 0.8em;
  & > ul {
    margin-top: 2em;
  }
`

const Footer = () => (
  <StyledFooter>
    <span>ary hélène {new Date().getFullYear()}</span>
    <SocialsMenu />
  </StyledFooter>
)

export default Footer
