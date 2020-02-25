import React from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import "../style/base.css"
import "purecss/build/base-min.css"
import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import "@reach/dialog/styles.css"
import "../style/style.css"
import "../style/fonts.css"
import "../style/colours.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
