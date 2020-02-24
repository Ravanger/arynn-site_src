import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import styles from "./SiteLogo.module.css"

//TODO:
//- Logo

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "logo" }) {
        childImageSharp {
          fluid {
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
