import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import FooterMenuItem from "./FooterMenuItem/FooterMenuItem"

const FooterMenu = () => {
  const data = useStaticQuery(graphql`
    query SiteSocialsQuery {
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
    <ul>
      <FooterMenuItem url={data.site.siteMetadata.facebook}>
        <FaFacebook size="2em" />
      </FooterMenuItem>
      <FooterMenuItem url={data.site.siteMetadata.twitter}>
        <FaTwitter size="2em" />
      </FooterMenuItem>
      <FooterMenuItem url={data.site.siteMetadata.instagram}>
        <FaInstagram size="2em" />
      </FooterMenuItem>
    </ul>
  )
}

export default FooterMenu
