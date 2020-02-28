import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import styles from "./About.module.css"

const About = () => {
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
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={"pure-g " + styles.wrapper}>
      <div className={"pure-u-1 pure-u-sm-1-2 " + styles.aboutContainer}>
        <GatsbyImage
          fluid={data.file.childImageSharp.fluid}
          className={styles.avatar}
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
  )
}

export default About
