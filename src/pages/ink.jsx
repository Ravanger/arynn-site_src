import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WorkPage from "../components/WorkPage"

const InkIllustrations = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArtPieces(
        filter: { art_category: { category_title: { glob: "ink*" } } }
      ) {
        edges {
          node {
            art_title
            art_price
            art_date
            strapiId
            art_image {
              childImageSharp {
                fluid(
                  traceSVG: { color: "#fcb8df" }
                  srcSetBreakpoints: [420, 680]
                  sizes: "(min-width: 421px) 680px ,(max-width: 420px) 420px, 680px"
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      strapiArtCategories(category_title: { glob: "ink*" }) {
        category_description
        category_subtitle
        category_title
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.strapiArtCategories.category_title}
        description={data.strapiArtCategories.category_description}
      />
      <WorkPage
        title={data.strapiArtCategories.category_title}
        subtitle={data.strapiArtCategories.category_subtitle}
        description={data.strapiArtCategories.category_description}
        data={data.allStrapiArtPieces.edges}
      />
    </Layout>
  )
}

export default InkIllustrations
