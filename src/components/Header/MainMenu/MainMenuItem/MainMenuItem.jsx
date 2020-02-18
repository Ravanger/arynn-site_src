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
}) => (
  <li
    className={
      styles.font +
      " pure-u-1 " +
      hoverClass +
      (isSubMenu ? "" : " pure-u-sm-1-3")
    }
  >
    {!isExternal ? (
      <Link to={to} activeClassName="activeLink">
        {title}
      </Link>
    ) : (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    )}
    {children}
  </li>
)

MainMenuItem.defaultProps = {
  hoverClass: ``,
  isSubMenu: false,
  isExternal: false,
}

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  hoverClass: PropTypes.string,
  isSubMenu: PropTypes.bool,
  isExternal: PropTypes.bool,
}

export default MainMenuItem