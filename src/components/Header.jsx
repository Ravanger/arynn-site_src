import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import SiteLogo from "./SiteLogo"
import MainMenu from "./MainMenu"
import MainMenuItem from "./MainMenu_Item"

import styles from "./Header.module.css"

const UlSubMenu = styled.ul`
  position: static;
  font-size: 0.9em;
  margin: 0;
  z-index: 1;
  padding: 2em 0;
  margin-bottom: -0.725rem;
  width: 100%;
  @media (min-width: 35.5em) {
    width: 13em;
    position: absolute;
    background-color: white;
    border-radius: 25%;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArtCategories {
        edges {
          node {
            category_title
            category_url
            strapiId
          }
        }
      }
    }
  `)

  return (
    <header>
      <SiteLogo />
      <MainMenu>
        <MainMenuItem
          title={"work ▾"}
          hoverClass={styles.hoverClass}
          isEmptyLink
        >
          <UlSubMenu className={styles.submenu}>
            {data.allStrapiArtCategories.edges.map((category) => {
              return (
                <MainMenuItem
                  key={category.node.strapiId}
                  title={category.node.category_title}
                  to={category.node.category_url}
                  isSubMenu
                />
              )
            })}
          </UlSubMenu>
        </MainMenuItem>
        <MainMenuItem title="home" to="/" />
        <MainMenuItem title="about me" to="/aboutme" />
        <MainMenuItem
          title="patreon"
          to="https://www.patreon.com/artsyarynn"
          isExternal
        />
      </MainMenu>
    </header>
  )
}

export default Header
