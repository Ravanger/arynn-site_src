import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioImages from "../components/PortfolioImage/PortfolioImage"

const IndexPage = () => (
  <Layout>
    <SEO title="home" description="ary hélène - home" />
    <PortfolioImages />
  </Layout>
)

export default IndexPage
