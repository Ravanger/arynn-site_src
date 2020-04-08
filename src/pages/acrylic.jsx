import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WorkPage from "../components/WorkPage"

const AcrylicPaintings = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "allwork" }
          relativeDirectory: { eq: "paintings" }
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
          acrylic {
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
        title={data.site.siteMetadata.acrylic.title}
        description={data.site.siteMetadata.acrylic.description}
      />
      <WorkPage
        title={data.site.siteMetadata.acrylic.title}
        subtitle={data.site.siteMetadata.acrylic.subtitle}
        description={data.site.siteMetadata.acrylic.description}
        data={data}
      />
    </Layout>
  )
}

export default AcrylicPaintings
