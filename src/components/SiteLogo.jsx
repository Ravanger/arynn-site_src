import React from "react"

import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const DivLogoWrapper = styled.div`
  text-align: center;
  max-width: 18em;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  @media (min-width: 35.5em) {
    margin-bottom: 4.75rem;
  }
`

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSiteMetadata {
        site_logo {
          childImageSharp {
            fluid(
              traceSVG: { color: "#fcb8df" }
              maxWidth: 333
              srcSetBreakpoints: [333]
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <DivLogoWrapper>
      <Link to="/">
        <GatsbyImage
          fluid={data.strapiSiteMetadata.site_logo.childImageSharp.fluid}
          alt="Home"
        />
      </Link>
    </DivLogoWrapper>
  )
}

export default SiteLogo
