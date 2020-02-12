import React from "react"
import ResponsiveMenu from "react-responsive-navbar"

import MainMenuItem from "./MainMenuItem/MainMenuItem"

import styles from "./MainMenu.module.css"

const MainMenu = () => (
  <ResponsiveMenu
    menuOpenButton={"X"}
    menuCloseButton={"X"}
    changeMenuOn="568px"
    largeMenuClassName={styles.largeMenu}
    smallMenuClassName="small-menu-classname"
    menu={
      <ul className={"pure-u-1-1 " + styles.mainMenu}>
        <MainMenuItem title="work" to="/" />
        <MainMenuItem title="about me" to="/" />
        <MainMenuItem title="patreon" to="/" />
      </ul>
    }
  />
)

export default MainMenu
