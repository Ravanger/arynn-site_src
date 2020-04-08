import React from "react"

import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const DivLogoWrapper = styled.div`
  text-align: center;
  max-width: 18em;
  margin: 0 auto;
  margin-bottom: 1.45rem;
`

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "logo" }) {
        childImageSharp {
          fluid(
            traceSVG: { color: "#fcb8df" }
            maxWidth: 333
            srcSetBreakpoints: [333]
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <DivLogoWrapper>
      <Link to="/">
        <GatsbyImage fluid={data.file.childImageSharp.fluid} alt="Home" />
      </Link>
    </DivLogoWrapper>
  )
}

export default SiteLogo
