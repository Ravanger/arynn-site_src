import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Masonry from "react-masonry-component"

import "purecss/build/base-min.css"
import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import styles from "./PortfolioImage.module.css"

export default class PortfolioImages extends React.Component {
  handleClick(e) {
    console.log("click: " + e.target.alt)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query photosData {
            allDataJson {
              edges {
                node {
                  photos {
                    src
                    title
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Masonry
            className={"pure-g"}
            elementType={"div"}
            onClick={this.handleClick}
          >
            {data.allDataJson.edges[0].node.photos.map(function(
              element,
              index
            ) {
              return (
                <img
                  src={element.src}
                  alt={element.title}
                  key={index}
                  className={
                    "pure-u-1 pure-u-sm-1-2  pure-u-md-1-3 pure-u-lg-1-4 " +
                    styles.padding
                  }
                />
              )
            })}
          </Masonry>
        )}
      />
    )
  }
}
