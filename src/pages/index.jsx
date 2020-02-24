import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioImages from "../components/PortfolioImage/PortfolioImage"

import "../style/base.css"
import "purecss/build/base-min.css"
import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import "@reach/dialog/styles.css"
import "../style/style.css"
import "../style/fonts.css"
import "../style/colours.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioImages />
  </Layout>
)

export default IndexPage
