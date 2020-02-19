import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import SocialsMenuItem from "./SocialsMenuItem/SocialsMenuItem"

const SocialsMenu = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          facebook
          twitter
          instagram
        }
      }
    }
  `)

  return (
    <ul className={props.className}>
      <SocialsMenuItem url={data.site.siteMetadata.facebook}>
        <FaFacebook size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem url={data.site.siteMetadata.twitter}>
        <FaTwitter size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem url={data.site.siteMetadata.instagram}>
        <FaInstagram size="2em" />
      </SocialsMenuItem>
    </ul>
  )
}

SocialsMenu.defaultProps = {
  className: "",
}

SocialsMenu.propTypes = {
  className: PropTypes.string,
}

export default SocialsMenu
