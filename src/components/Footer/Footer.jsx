import React from "react"

import SocialsMenu from "../SocialsMenu/SocialsMenu"

import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <span>ary hélène {new Date().getFullYear()}</span>
    <SocialsMenu />
  </footer>
)

export default Footer
