import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioImages from "../components/PortfolioImage/PortfolioImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioImages />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
