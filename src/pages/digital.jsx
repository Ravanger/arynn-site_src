import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WorkPage from "../components/WorkPage"

const DigitalArt = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "allwork" }
          relativeDirectory: { eq: "digital" }
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
          digital {
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
        title={data.site.siteMetadata.digital.title}
        description={data.site.siteMetadata.digital.description}
      />
      <WorkPage
        title={data.site.siteMetadata.digital.title}
        subtitle={data.site.siteMetadata.digital.subtitle}
        description={data.site.siteMetadata.digital.description}
        data={data}
      />
    </Layout>
  )
}

export default DigitalArt
