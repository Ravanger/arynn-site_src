import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioImages from "../components/PortfolioImage/PortfolioImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Arynn Fitzsimmons: Home" />
    <PortfolioImages />
  </Layout>
)

export default IndexPage
