import React from "react"

import { FiArrowDown, FiArrowUp } from "react-icons/fi"
import PropTypes from "prop-types"
import styled from "styled-components"

const DivContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 0em;
  @media (min-width: 35.5em) {
    margin-bottom: 2em;
  }
`

const NavMainMenuWrapper = styled.nav`
  margin: 0;
  max-width: 48em;
  @media (min-width: 35.5em) {
    position: relative;
    margin: 1rem 0;
  }
`

const LabelBurgerMenu = styled.label`
  display: block;
  font-size: 1.2em;
  @media (min-width: 35.5em) {
    display: none;
  }
`

const UlMainMenu = styled.ul`
  position: relative;
  width: 100%;
  display: none;
  @media (min-width: 35.5em) {
    text-align: center;
    position: absolute;
    bottom: 0;
    display: flex;
  }
`
const FiArrowDownStyled = styled(FiArrowDown)``

const FiArrowUpStyled = styled(FiArrowUp)``

const CheckboxController = styled.input`
  &:checked ~ ${UlMainMenu} {
    @media (max-width: 35.5em) {
      display: flex;
    }
  }

  &:checked ~ ${LabelBurgerMenu} > ${FiArrowDownStyled} {
    display: none;
  }

  &:not(:checked) ~ ${LabelBurgerMenu} > ${FiArrowUpStyled} {
    display: none;
  }
`

const MainMenu = ({ children }) => (
  <DivContainer className="pure-g">
    <NavMainMenuWrapper className="pure-u-1-1">
      <CheckboxController type="checkbox" id="toggle" hidden />
      <LabelBurgerMenu htmlFor="toggle">
        <FiArrowDownStyled />
        <FiArrowUpStyled />
      </LabelBurgerMenu>
      <UlMainMenu className="pure-g">{children}</UlMainMenu>
    </NavMainMenuWrapper>
  </DivContainer>
)

MainMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainMenu
