import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Masonry from "react-masonry-component"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

import SocialsMenu from "../SocialsMenu/SocialsMenu"

import styles from "./PortfolioImage.module.css"

const PortfolioImages = () => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const toggleShowLightBox = () => {
    setShowLightbox(!showLightbox)
  }

  const nextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % sortedArray.length
    setSelectedImage(sortedArray[nextIndex])
    setSelectedImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex =
      selectedImageIndex - 1 < 0
        ? sortedArray.length - 1
        : selectedImageIndex - 1
    setSelectedImage(sortedArray[prevIndex])
    setSelectedImageIndex(prevIndex)
  }

  const handleKeyPress = event => {
    const keyCode = event.charCode
      ? event.charCode
      : event.keyCode
      ? event.keyCode
      : 0

    switch (keyCode) {
      case 37: //left
        prevImage()
        break
      case 39: //right
        nextImage()
        break
      default:
        break
    }
  }

  const renderDialog = () => {
    if (showLightbox && window.innerWidth >= 768)
      return (
        <DialogOverlay
          className={styles.blurbg}
          onDismiss={toggleShowLightBox}
          onKeyDown={handleKeyPress}
        >
          <DialogContent
            aria-label="Image popup"
            className={"pure-g " + styles.dialog}
          >
            <button
              className={
                "pure-u-2-24 " + styles.dirButton + " " + styles.button
              }
              onClick={() => {
                prevImage()
              }}
            >
              {<FiArrowLeft size="1.2em" />}
            </button>
            <button
              className={"pure-u-20-24 " + styles.button}
              onClick={() => {
                toggleShowLightBox()
              }}
            >
              <GatsbyImage fluid={selectedImage.node.childImageSharp.fluid} />
            </button>
            <button
              className={
                "pure-u-2-24 " + styles.dirButton + " " + styles.button
              }
              onClick={() => {
                nextImage()
              }}
            >
              {<FiArrowRight size="1.2em" />}
            </button>
          </DialogContent>
        </DialogOverlay>
      )
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "allwork" } }) {
        edges {
          node {
            childImageSharp {
              fluid(traceSVG: { color: "#fcb8df" }, maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            modifiedTime
          }
        }
      }
      site {
        siteMetadata {
          allwork {
            description
            subtitle
            title
          }
        }
      }
    }
  `)

  const sortedArray = data.allFile.edges.sort((a, b) => {
    return new Date(b.node.modifiedTime) - new Date(a.node.modifiedTime)
  })

  return (
    <>
      <div className={styles.topWrapper}>
        <h1 className={styles.title}>{data.site.siteMetadata.allwork.title}</h1>
        <p className={styles.subtitle}>
          {data.site.siteMetadata.allwork.subtitle}
        </p>
        <p className={styles.description}>
          {data.site.siteMetadata.allwork.description}
        </p>
        <SocialsMenu />
      </div>
      <Masonry className={"pure-g"} elementType={"div"}>
        {sortedArray.map((element, index) => {
          return (
            <button
              key={index}
              className={
                "pure-u-1 pure-u-sm-1-2  pure-u-md-1-3 pure-u-lg-1-4 " +
                styles.imgContainer +
                " " +
                styles.button
              }
              onClick={() => {
                toggleShowLightBox()
                setSelectedImageIndex(index)
                setSelectedImage(element)
              }}
            >
              <GatsbyImage fluid={element.node.childImageSharp.fluid} />
            </button>
          )
        })}

        {renderDialog()}
      </Masonry>
    </>
  )
}

export default PortfolioImages
