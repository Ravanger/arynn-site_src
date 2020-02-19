import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

import Masonry from "react-masonry-component"

import "purecss/build/base-min.css"
import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import styles from "./PortfolioImage.module.css"

const PortfolioImages = () => {
  const handleClick = e => {
    console.log("click: " + e.target.src)
  }

  const data = useStaticQuery(graphql`
    query photosData {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/work/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 70, maxWidth: 915) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Masonry className={"pure-g"} elementType={"div"} onClick={handleClick}>
      {data.allFile.edges.map(function(element, index) {
        element = element.node.childImageSharp
        return (
          <div
            key={index}
            className={
              "pure-u-1 pure-u-sm-1-2  pure-u-md-1-3 pure-u-lg-1-4 " +
              styles.imgContainer
            }
          >
            <GatsbyImage fluid={element.fluid} />
          </div>
        )
      })}
    </Masonry>
  )
}

export default PortfolioImages
