import React from "react"
import { Link } from "gatsby"

const MainMenuItem = ({ title, to }) => (
  <li className="pure-u-1 pure-u-sm-1-3">
    <Link to={to}>{title}</Link>
  </li>
)

export default MainMenuItem
