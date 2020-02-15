import React from "react"
import ResponsiveMenu from "react-responsive-navbar"

import MainMenuItem from "./MainMenuItem/MainMenuItem"

import styles from "./MainMenu.module.css"

const mobileLayoutBreak = "35.5em"

const MainMenu = () => (
  <ResponsiveMenu
    menuOpenButton={"X"}
    menuCloseButton={"X"}
    changeMenuOn={mobileLayoutBreak}
    menu={
      <div className={"pure-g " + styles.center}>
        <ul className={"pure-u-1-1 " + styles.mainMenu}>
          <MainMenuItem title="work" to="/" hoverClass={styles.hoverClass}>
            <ul class={styles.dropdownContent}>
              <MainMenuItem title="acrylic paintings" to="/" isSubMenu />
              <MainMenuItem title="ink illustrations" to="/" isSubMenu />
              <MainMenuItem title="digital artwork" to="/" isSubMenu />
            </ul>
          </MainMenuItem>
          <MainMenuItem title="about me" to="/" />
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
