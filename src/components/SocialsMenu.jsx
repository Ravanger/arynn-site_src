import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import SocialsMenuItem from "./SocialsMenu_Item"

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
      <SocialsMenuItem
        url={"mailto:" + data.site.siteMetadata.email}
        arialabel="Email"
      >
        <FaEnvelope size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem
        url={data.site.siteMetadata.facebook}
        arialabel="Facebook"
      >
        <FaFacebook size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem url={data.site.siteMetadata.twitter} arialabel="Twitter">
        <FaTwitter size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem
        url={data.site.siteMetadata.instagram}
        arialabel="Instagram"
      >
        <FaInstagram size="2em" />
      </SocialsMenuItem>
    </ul>
  )
}

export default SocialsMenu
