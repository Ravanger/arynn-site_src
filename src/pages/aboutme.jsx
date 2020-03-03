import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GatsbyImage from "gatsby-image"

import styles from "../style/About.module.css"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          about
        }
      }
      file(sourceInstanceName: { eq: "about" }) {
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
  `)

  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.about}
      />
      <div className={"pure-g " + styles.wrapper}>
        <div className={"pure-u-1 pure-u-sm-1-2 " + styles.aboutContainer}>
          <GatsbyImage
            fluid={data.file.childImageSharp.fluid}
            className={styles.avatar}
            alt={data.site.siteMetadata.title}
          />
        </div>
        <div className={"pure-u-1 pure-u-sm-1-2 " + styles.aboutContainer}>
          <h1 className={styles.name}>{data.site.siteMetadata.title}</h1>
          <p className={styles.description}>
            {data.site.siteMetadata.description}
          </p>
          <p className={styles.aboutblurb}>{data.site.siteMetadata.about}</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
