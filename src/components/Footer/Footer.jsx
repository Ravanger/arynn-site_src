import React from "react"

import FooterMenu from "./FooterMenu/FooterMenu"

import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <span>ary hélène {new Date().getFullYear()}</span>
    <FooterMenu />
  </footer>
)

export default Footer
