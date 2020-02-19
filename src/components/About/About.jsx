import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import SocialsMenu from "../SocialsMenu/SocialsMenu"

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
    }
  `)
  return (
    <div className={"pure-g " + styles.wrapper}>
      <div className={"pure-u-2 " + styles.aboutContainer}>
        <h2 className={styles.name}>{data.site.siteMetadata.title}</h2>
        <p className={styles.description}>
          {data.site.siteMetadata.description}
        </p>
        <p className={styles.aboutblurb}>{data.site.siteMetadata.about}</p>
        <SocialsMenu />
      </div>
      {/* TODO: replace with image */}
      <div className={"pure-u-2 " + styles.aboutContainer}>
        <h2 className={styles.name}>{data.site.siteMetadata.title}</h2>
        <p className={styles.description}>
          {data.site.siteMetadata.description}
        </p>
        <p className={styles.aboutblurb}>{data.site.siteMetadata.about}</p>
      </div>
    </div>
  )
}

export default About
