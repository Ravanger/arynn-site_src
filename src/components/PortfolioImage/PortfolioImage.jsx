import React from "react"
import Masonry from "react-masonry-component"

import { photos } from "./Photos.json"

import "purecss/build/base-min.css"
import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import styles from "./PortfolioImage.module.css"

export default class PortfolioImages extends React.Component {
  handleClick(e) {
    console.log("click: " + e.target.alt)
  }

  render() {
    const childElements = photos.map(function(element, index) {
      return (
        <img
          src={element.src}
          alt={element.title}
          key={index}
          className={
            "pure-u-1 pure-u-md-1-2  pure-u-lg-1-3 pure-u-xl-1-4 " +
            styles.padding
          }
        />
      )
    })

    return (
      <Masonry
        className={"pure-g"}
        elementType={"div"}
        onClick={this.handleClick}
      >
        {childElements}
      </Masonry>
    )
  }
}
