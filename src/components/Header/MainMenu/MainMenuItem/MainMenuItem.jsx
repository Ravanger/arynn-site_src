import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const MainMenuItem = ({ title, to }) => (
  <li className="pure-u-1 pure-u-sm-1-3">
    <Link to={to} activeClassName="active">
      {title}
    </Link>
  </li>
)

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default MainMenuItem
