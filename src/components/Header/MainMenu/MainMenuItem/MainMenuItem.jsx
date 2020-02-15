import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./MainMenuItem.module.css"

const MainMenuItem = ({
  children,
  title,
  to,
  hoverClass,
  isSubMenu,
  isExternal,
}) => (
  <li
    className={"pure-u-1 " + hoverClass + (isSubMenu ? "" : " pure-u-sm-1-3")}
  >
    {/* <Link to={to} activeClassName="active">
      {title}
    </Link> */}
    {(() => {
      if (isExternal) {
        return (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            activeClassName="active"
          >
            {title}
          </a>
        )
      } else {
        return (
          <Link to={to} activeClassName="active">
            {title}
          </Link>
        )
      }
    })()}
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
