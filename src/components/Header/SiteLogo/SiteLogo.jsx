import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import styles from "./SiteLogo.module.css"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "logo" }) {
        childImageSharp {
          fluid(traceSVG: { color: "#fcb8df" }, maxWidth: 333) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={styles.logoWrapper}>
      <Link to="/">
        <GatsbyImage fluid={data.file.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default SiteLogo
