import React, { useState } from "react"

import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Masonry from "react-masonry-component"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

import SocialsMenu from "./SocialsMenu"

const DivWrapper = styled.div`
  text-align: center;
  & > ul {
    font-size: 0.8em;
  }
`

const H1Title = styled.h1`
  font-family: "Libre-Baskerville", serif !important;
  font-size: 1.25em;
  line-height: normal;
  color: black;
  margin-top: 1rem;
  margin-bottom: 0.7rem;
`

const H2Subtitle = styled.h2`
  font-family: "Libre-Baskerville-Italic", serif !important;
  font-size: 0.8em;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2.5rem;
`

const PDescription = styled.p`
  max-width: 28em;
  font-family: "Avenir-Light", serif !important;
  font-size: 0.8em;
  line-height: 2em;
  margin: 0 auto;
  margin-bottom: 3rem;
`

const ButtonImgContainer = styled.button`
  padding: 1.45rem;
  &:focus,
  &:focus-within,
  &:active {
    outline: 0;
  }
`

const DialogOverlayBlur = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    background: hsla(0, 100%, 100%, 0.95);
  }
`

const StyledDialogContent = styled(DialogContent)`
  &[data-reach-dialog-content] {
    padding: 0;
    margin: 2rem auto;
  }
`

const ButtonDirButton = styled.button`
  text-align: center;

  & > svg {
    height: 100%;
  }

  &:focus,
  &:focus-within,
  &:active {
    outline: 0;
  }
`

const ButtonImage = styled.button`
  &:focus,
  &:focus-within,
  &:active {
    outline: 0;
  }
`

const PortfolioImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "allwork" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                traceSVG: { color: "#fcb8df" }
                maxWidth: 660
                srcSetBreakpoints: [420, 660]
                sizes: "(min-width: 421px) 660px ,(max-width: 420px) 420px, 660px"
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
                srcSet
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

  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  //Sort images by newest
  const sortedArray = data.allFile.edges.sort((a, b) => {
    return new Date(b.node.modifiedTime) - new Date(a.node.modifiedTime)
  })

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
    if (showLightbox)
      return (
        <DialogOverlayBlur
          onDismiss={toggleShowLightBox}
          onKeyDown={handleKeyPress}
          className="blurbg"
        >
          <StyledDialogContent
            aria-label="Image popup"
            className="pure-g popupdialog"
          >
            <ButtonDirButton
              className="pure-u-2-24"
              onClick={() => {
                prevImage()
              }}
              aria-label="Previous"
            >
              {<FiArrowLeft size="1.2em" />}
            </ButtonDirButton>
            <ButtonImage
              className="pure-u-20-24"
              onClick={() => {
                toggleShowLightBox()
              }}
              aria-label="Close lightbox"
            >
              <GatsbyImage
                fluid={selectedImage.node.childImageSharp.fluid}
                alt={selectedImage.node.childImageSharp.fluid.originalName}
              />
            </ButtonImage>
            <ButtonDirButton
              className="pure-u-2-24"
              onClick={() => {
                nextImage()
              }}
              aria-label="Next"
            >
              {<FiArrowRight size="1.2em" />}
            </ButtonDirButton>
          </StyledDialogContent>
        </DialogOverlayBlur>
      )
  }

  return (
    <>
      <DivWrapper>
        <H1Title>{data.site.siteMetadata.allwork.title}</H1Title>
        <H2Subtitle>{data.site.siteMetadata.allwork.subtitle}</H2Subtitle>
        <PDescription>
          {data.site.siteMetadata.allwork.description}
        </PDescription>
        <SocialsMenu />
      </DivWrapper>
      <Masonry className={"pure-g"} elementType={"div"}>
        {sortedArray.map((element, index) => {
          return (
            <ButtonImgContainer
              key={index}
              className="pure-u-1 pure-u-sm-1-2  pure-u-md-1-3 pure-u-lg-1-4"
              onClick={() => {
                if (window.innerWidth >= 768) {
                  toggleShowLightBox()
                  setSelectedImageIndex(index)
                  setSelectedImage(element)
                }
              }}
              aria-label="Open image in lightbox"
            >
              <GatsbyImage
                fluid={element.node.childImageSharp.fluid}
                alt={element.node.childImageSharp.fluid.originalName}
              />
            </ButtonImgContainer>
          )
        })}

        {renderDialog()}
      </Masonry>
    </>
  )
}

export default PortfolioImages
