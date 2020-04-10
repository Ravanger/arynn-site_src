import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"

const DivWrapper = styled.div`
  justify-content: center;
  text-align: center;
`

const DivWidthContainer = styled.div`
  max-width: 36em;
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
  margin-bottom: 5rem;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-bottom: 2rem;
`

const WorkPage = ({ title, subtitle, description, data }) => {
  try {
    const sortedArray = data.sort((a, b) => {
      return new Date(b.node.art_date) - new Date(a.node.art_date)
    })

    return (
      <DivWrapper className="pure-g">
        <DivWidthContainer className="pure-u-1">
          <H1Title>{title}</H1Title>
          <H2Subtitle>{subtitle}</H2Subtitle>
          <PDescription>{description}</PDescription>
          {sortedArray.map(element => {
            if (element.node && element.node.art_image) {
              return (
                <StyledGatsbyImage
                  fluid={element.node.art_image.childImageSharp.fluid}
                  key={element.node.strapiId}
                  alt={element.node.art_title}
                />
              )
            } else {
              // console.log(element)
              return null
            }
          })}
        </DivWidthContainer>
      </DivWrapper>
    )
  } catch (error) {
    // console.log(error)
    return null
  }
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
  data: PropTypes.array.isRequired,
}

export default WorkPage
