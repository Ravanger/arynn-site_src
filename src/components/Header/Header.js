import React from "react"

import PropTypes from "prop-types"

import SiteLogo from "./SiteLogo/SiteLogo"
import MainMenu from "./MainMenu/MainMenu.js"

const Header = ({ siteTitle }) => (
  <header>
    <SiteLogo siteTitle={siteTitle} />
    <MainMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
