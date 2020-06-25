import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import Header from "./Header"
import Footer from "./Footer"

const GlobalStyles = css`
  .no-js {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }

  body {
    overflow-x: hidden;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: auto;
  }

  ul {
    padding: 0;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  img {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
  }

  a {
    color: black;
    transition: color 0.4s ease 0s;
  }

  a:hover {
    color: #fcb8df;
    transition: color 0.4s ease 0s;
  }

  .activeLink {
    color: #fcb8df;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
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
