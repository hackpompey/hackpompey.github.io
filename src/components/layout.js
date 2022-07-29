import React from "react"
import * as style from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// Make FontAwesome icons available without specific imports
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

/**
 * The standard structure used in all pages
 */
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`{
  background: file(relativePath: {eq: "images/background.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <div className={style.layout} id="outer-container">
      <Header />
      <BackgroundImage
        Tag="section"
        className={style.background}
        fluid={data.background.childImageSharp.gatsbyImageData}
      >
        <div className={style.content} id="page-wrap">
          {/* Display inner HTML elements */}
          {children}
          <Footer />
        </div>
      </BackgroundImage>
    </div>
  );
}

export default Layout
