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
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/work/ink/" }
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
      <SEO title="Ink Illustrations" />
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
