import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkPage from "../components/WorkPage/WorkPage"

const AcrylicPaintings = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/work/paintings/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 70, maxWidth: 915) {
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
      <SEO title="Acrylic Paintings" />
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