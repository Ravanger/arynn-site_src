import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"

const LiSocialsMenuItem = styled.li`
  display: inline-block;
  & + li {
    margin-left: 1em;
  }
`

const FooterMenuItem = ({ children, url, arialabel }) => (
  <LiSocialsMenuItem>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arialabel}
    >
      {children}
    </a>
  </LiSocialsMenuItem>
)

FooterMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
}

export default FooterMenuItem
