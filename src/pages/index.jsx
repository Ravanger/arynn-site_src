import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioImages from "../components/PortfolioImage/PortfolioImage"

import "../style/fonts/fonts.css"
import "../style/colours.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioImages />
  </Layout>
)

export default IndexPage
