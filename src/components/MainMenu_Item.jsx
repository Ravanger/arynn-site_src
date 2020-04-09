import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LiMenuItem = styled.li`
  & > a,
  & > button {
    font-family: "Avenir-Light", Arial, Helvetica, sans-serif !important;
    font-size: 0.9em;
  }
`

const ButtonMenuItem = styled.button`
  cursor: pointer;
`

const ATitle = styled.a`
  text-transform: lowercase;
`

const LinkTitle = styled(Link)`
  text-transform: lowercase;
`

const MainMenuItem = ({
  children,
  title,
  to,
  hoverClass,
  isSubMenu,
  isExternal,
  isEmptyLink,
}) => (
  <LiMenuItem
    className={"pure-u-1 " + hoverClass + (isSubMenu ? "" : " pure-u-sm-1-4")}
  >
    {isEmptyLink ? (
      <ButtonMenuItem aria-label="Open menu">{title}</ButtonMenuItem>
    ) : isExternal ? (
      <ATitle href={to} target="_blank" rel="noopener noreferrer">
        {title}
      </ATitle>
    ) : (
      <LinkTitle to={to} activeClassName="activeLink">
        {title}
      </LinkTitle>
    )}
    {children}
  </LiMenuItem>
)

MainMenuItem.defaultProps = {
  hoverClass: ``,
  isSubMenu: false,
  isExternal: false,
  isEmptyLink: false,
}

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  hoverClass: PropTypes.string,
  isSubMenu: PropTypes.bool,
  isExternal: PropTypes.bool,
  isEmptyLink: PropTypes.bool,
}

export default MainMenuItem
