import React from "react"

import PropTypes from "prop-types"

import styles from "./SocialsMenuItem.module.css"

const FooterMenuItem = ({ children, url, arialabel }) => (
  <li className={styles.menuItem}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arialabel}
    >
      {children}
    </a>
  </li>
)

FooterMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
}

export default FooterMenuItem
