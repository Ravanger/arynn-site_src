import React from "react"

import PropTypes from "prop-types"

import SiteLogo from "./SiteLogo/SiteLogo"
import MainMenu from "./MainMenu/MainMenu"

const Header = () => (
  <header>
    <SiteLogo />
    <MainMenu />
  </header>
)

export default Header
