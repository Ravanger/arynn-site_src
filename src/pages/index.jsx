import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import PortfolioImages from "../components/PortfolioImage"

const IndexPage = () => (
  <Layout>
    <SEO title="home" description="ary hélène - home" />
    <PortfolioImages />
  </Layout>
)

export default IndexPage
