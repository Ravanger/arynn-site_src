import React from "react"

import styled from "styled-components"
import ResponsiveMenu from "react-responsive-navbar"
import { FiArrowDown, FiArrowUp } from "react-icons/fi"

import MainMenuItem from "./MainMenu_Item"

import styles from "./MainMenu.module.css"

const DivContainer = styled.div`
  justify-content: center;
  margin-bottom: 0em;
  @media (min-width: 35.5em) {
    margin-bottom: 3em;
  }
`

const UlMainMenu = styled.ul`
  margin-left: 0;
  max-width: 48em;
`

const UlSubMenu = styled.ul`
  position: static;
  font-size: 0.9em;
  margin: 0;
  z-index: 1;
  padding: 2em 0;
  margin-bottom: -0.725rem;
  width: 100%;
  @media (min-width: 35.5em) {
    width: 13em;
    position: absolute;
  }
`

const MainMenu = () => (
  <ResponsiveMenu
    menuOpenButton={<FiArrowDown size="1.2em" />}
    menuCloseButton={<FiArrowUp size="1.2em" />}
    changeMenuOn="35.5em"
    menu={
      <DivContainer className="pure-g">
        <UlMainMenu className="pure-u-1-1">
          <MainMenuItem
            title={"work ▾"}
            hoverClass={styles.hoverClass}
            isEmptyLink
          >
            <UlSubMenu className={styles.submenu}>
              <MainMenuItem title="acrylic paintings" to="/acrylic" isSubMenu />
              <MainMenuItem title="ink illustrations" to="/ink" isSubMenu />
              <MainMenuItem title="digital artwork" to="/digital" isSubMenu />
            </UlSubMenu>
          </MainMenuItem>
          <MainMenuItem title="home" to="/" />
          <MainMenuItem title="about me" to="/aboutme" />
          <MainMenuItem
            title="patreon"
            to="https://www.patreon.com/artsyarynn"
            isExternal
          />
        </UlMainMenu>
      </DivContainer>
    }
  />
)

export default MainMenu
