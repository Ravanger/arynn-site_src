import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import SocialsMenuItem from "./SocialsMenu_Item"

const SocialsMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSiteMetadata {
        facebook
        email
        instagram
        twitter
      }
    }
  `)

  return (
    <ul>
      <SocialsMenuItem
        url={"mailto:" + data.strapiSiteMetadata.email}
        arialabel="Email"
      >
        <FaEnvelope size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem
        url={data.strapiSiteMetadata.facebook}
        arialabel="Facebook"
      >
        <FaFacebook size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem
        url={data.strapiSiteMetadata.twitter}
        arialabel="Twitter"
      >
        <FaTwitter size="2em" />
      </SocialsMenuItem>
      <SocialsMenuItem
        url={data.strapiSiteMetadata.instagram}
        arialabel="Instagram"
      >
        <FaInstagram size="2em" />
      </SocialsMenuItem>
    </ul>
  )
}

export default SocialsMenu
