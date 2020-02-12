import React from "react"

import { Link } from "gatsby"

import styles from "./SiteLogo.module.css"

const SiteLogo = ({ siteTitle }) => (
  <div className={styles.center}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

export default SiteLogo
