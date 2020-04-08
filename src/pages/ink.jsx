import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WorkPage from "../components/WorkPage"

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
              fluid(
                traceSVG: { color: "#fcb8df" }
                maxWidth: 600
                srcSetBreakpoints: [420, 600]
              ) {
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
