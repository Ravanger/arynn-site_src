import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkPage from "../components/WorkPage/WorkPage"

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
        title="Digital Artwork"
        description="Arynn Fitzsimmons: Digital Artwork"
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
