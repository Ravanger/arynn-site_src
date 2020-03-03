import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./MainMenuItem.module.css"
import styles from "./MainMenuItem.module.css"

const MainMenuItem = ({
  children,
  title,
  to,
  hoverClass,
  isSubMenu,
  isExternal,
  isEmptyLink,
}) => (
  <li
    className={
      styles.font +
      " pure-u-1 " +
      hoverClass +
      (isSubMenu ? "" : " pure-u-sm-1-4")
    }
  >
    {isEmptyLink ? (
      <button className={styles.hoverButton} aria-label="Open menu">
        {title}
      </button>
    ) : isExternal ? (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ) : (
      <Link to={to} activeClassName="activeLink">
        {title}
      </Link>
    )}
    {children}
  </li>
)

MainMenuItem.defaultProps = {
  hoverClass: ``,
  isSubMenu: false,
  isExternal: false,
  isEmptyLink: false,
}

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  hoverClass: PropTypes.string,
  isSubMenu: PropTypes.bool,
  isExternal: PropTypes.bool,
  isEmptyLink: PropTypes.bool,
}

export default MainMenuItem
