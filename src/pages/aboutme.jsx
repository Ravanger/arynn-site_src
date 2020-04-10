import React from "react"

import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import GatsbyImage from "gatsby-image"

const DivWrapper = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 1rem;
`

const DivAbout = styled.div`
  max-width: 24rem;
  padding: 2em;
`

const GatsbyImageAvatar = styled(GatsbyImage)`
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
`

const H1Name = styled.h1`
  font-family: "Libre-Baskerville", serif !important;
  font-size: 1.2em;
  letter-spacing: normal;
`

const PDescription = styled.p`
  font-family: "Libre-Baskerville-Italic", serif !important;
  font-size: 0.7em;
  line-height: normal;
  letter-spacing: 0.08em;
`

const PAboutBlurb = styled.p`
  font-family: "Avenir-Light", Arial, Helvetica, sans-serif !important;
  font-size: 0.8em;
  line-height: 1.8em;
  letter-spacing: normal;
`

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSiteMetadata {
        site_title
        site_about
        site_description
        avatar {
          childImageSharp {
            fluid(
              traceSVG: { color: "#fcb8df" }
              maxWidth: 360
              srcSetBreakpoints: [360]
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.strapiSiteMetadata.site_title}
        description={data.strapiSiteMetadata.site_description}
      />
      <DivWrapper className="pure-g">
        <DivAbout className="pure-u-1 pure-u-sm-1-2">
          {data.strapiSiteMetadata.avatar ? (
            <GatsbyImageAvatar
              fluid={data.strapiSiteMetadata.avatar.childImageSharp.fluid}
              alt={data.strapiSiteMetadata.site_title}
            />
          ) : null}
        </DivAbout>
        <DivAbout className="pure-u-1 pure-u-sm-1-2">
          <H1Name>{data.strapiSiteMetadata.site_title}</H1Name>
          <PDescription>
            {data.strapiSiteMetadata.site_description}
          </PDescription>
          <PAboutBlurb>{data.strapiSiteMetadata.site_about}</PAboutBlurb>
        </DivAbout>
      </DivWrapper>
    </Layout>
  )
}

export default AboutMe
