import React from "react"
import ResponsiveMenu from "react-responsive-navbar"
import { FiArrowDown, FiArrowUp } from "react-icons/fi"

import MainMenuItem from "./MainMenuItem/MainMenuItem"

import styles from "./MainMenu.module.css"

const MainMenu = () => (
  <ResponsiveMenu
    menuOpenButton={<FiArrowDown size="1.2em" />}
    menuCloseButton={<FiArrowUp size="1.2em" />}
    changeMenuOn="35.5em"
    menu={
      <div className={"pure-g " + styles.menuContainer}>
        <ul className={"pure-u-1-1 " + styles.mainMenu}>
          <MainMenuItem title="work" to="/" hoverClass={styles.hoverClass}>
            <ul className={styles.submenu}>
              <MainMenuItem title="acrylic paintings" to="/acrylic" isSubMenu />
              <MainMenuItem title="ink illustrations" to="/ink" isSubMenu />
              <MainMenuItem title="digital artwork" to="/digital" isSubMenu />
            </ul>
          </MainMenuItem>
          <MainMenuItem title="about me" to="/aboutme" />
          <MainMenuItem
            title="patreon"
            to="https://www.patreon.com/artsyarynn"
            isExternal
          />
        </ul>
      </div>
    }
  />
)

export default MainMenu
