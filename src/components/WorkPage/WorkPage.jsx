import React from "react"

import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"

import styles from "./WorkPage.module.css"

const WorkPage = ({ title, subtitle, description, data }) => {
  const sortedArray = data.allFile.edges.sort((a, b) => {
    return new Date(b.node.modifiedTime) - new Date(a.node.modifiedTime)
  })

  return (
    <div className={"pure-g " + styles.wrapperContainer}>
      <div className={"pure-u-1 " + styles.centerContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
        {sortedArray.map((element, index) => {
          return (
            <GatsbyImage
              fluid={element.node.childImageSharp.fluid}
              key={index}
              className={styles.image}
            />
          )
        })}
      </div>
    </div>
  )
}

WorkPage.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  data: null,
}

WorkPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default WorkPage
