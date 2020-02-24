import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import SocialsMenuItem from "./SocialsMenuItem/SocialsMenuItem"

const SocialsMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          facebook
          twitter
          instagram
        }
      }
    }
  `)

  return (
    <ul>
      <SocialsMenuItem url={"mailto:" + data.site.siteMetadata.email}>
        <FaEnvelope size="2em" />
      </SocialsMenuItem>
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

export default SocialsMenu
