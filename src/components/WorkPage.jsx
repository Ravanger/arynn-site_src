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
  const sortedArray = data.allFile.edges.sort((a, b) => {
    return new Date(b.node.modifiedTime) - new Date(a.node.modifiedTime)
  })

  return (
    <DivWrapper className="pure-g">
      <DivWidthContainer className="pure-u-1">
        <H1Title>{title}</H1Title>
        <H2Subtitle>{subtitle}</H2Subtitle>
        <PDescription>{description}</PDescription>
        {sortedArray.map((element, index) => {
          return (
            <StyledGatsbyImage
              fluid={element.node.childImageSharp.fluid}
              key={index}
              alt={title}
            />
          )
        })}
      </DivWidthContainer>
    </DivWrapper>
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
