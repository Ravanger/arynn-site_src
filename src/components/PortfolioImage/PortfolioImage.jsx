import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Masonry from "react-masonry-component"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

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

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/work/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(traceSVG: { color: "#fcb8df" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            modifiedTime
          }
        }
      }
    }
  `)

  const sortedArray = data.allFile.edges.sort((a, b) => {
    return new Date(b.node.modifiedTime) - new Date(a.node.modifiedTime)
  })

  return (
    //TODO:
    //- title: gallery
    //- subtitle: all works
    //- (add everywhere) description: add "all pieces for sale, email for inquiries and prices" here
    //- Move image logic into own component
    <Masonry className={"pure-g"} elementType={"div"}>
      {sortedArray.map((element, index) => {
        return (
          <div
            key={index}
            className={
              "pure-u-1 pure-u-sm-1-2  pure-u-md-1-3 pure-u-lg-1-4 " +
              styles.imgContainer
            }
            onClick={() => {
              toggleShowLightBox()
              setSelectedImageIndex(index)
              setSelectedImage(element)
            }}
            onKeyDown={() => {
              toggleShowLightBox()
              setSelectedImageIndex(index)
              setSelectedImage(element)
            }}
            role="button"
            tabIndex="-1"
          >
            <GatsbyImage fluid={element.node.childImageSharp.fluid} />
          </div>
        )
      })}

      {showLightbox && (
        <DialogOverlay className={styles.blurbg} onDismiss={toggleShowLightBox}>
          <DialogContent
            aria-label="Image popup"
            className={"pure-g " + styles.dialog}
          >
            <div
              className={"pure-u-2-24 " + styles.button}
              onClick={() => {
                prevImage()
                console.log("Prev")
              }}
              onKeyDown={() => {
                prevImage()
                console.log("Prev")
              }}
              role="button"
              tabIndex="0"
            >
              {<FiArrowLeft size="1.2em" />}
            </div>
            <GatsbyImage
              className={"pure-u-20-24"}
              fluid={selectedImage.node.childImageSharp.fluid}
            />
            <div
              className={"pure-u-2-24 " + styles.button}
              onClick={() => {
                nextImage()
                console.log("Next")
              }}
              onKeyDown={() => {
                nextImage()
                console.log("Next")
              }}
              role="button"
              tabIndex="0"
            >
              {<FiArrowRight size="1.2em" />}
            </div>
          </DialogContent>
        </DialogOverlay>
      )}
    </Masonry>
  )
}

export default PortfolioImages
