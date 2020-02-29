import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkPage from "../components/WorkPage/WorkPage"

const InkIllustrations = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "allwork" }
          relativeDirectory: { eq: "ink" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            modifiedTime
          }
        }
      }
      site {
        siteMetadata {
          ink {
            description
            subtitle
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.ink.title}
        description={data.site.siteMetadata.ink.description}
      />
      <WorkPage
        title={data.site.siteMetadata.ink.title}
        subtitle={data.site.siteMetadata.ink.subtitle}
        description={data.site.siteMetadata.ink.description}
        data={data}
      />
    </Layout>
  )
}

export default InkIllustrations
