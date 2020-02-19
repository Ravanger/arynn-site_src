import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./SiteLogo.module.css"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.center}>
      <h1 className={styles.title}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    </div>
  )
}

export default SiteLogo
