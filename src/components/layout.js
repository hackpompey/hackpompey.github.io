import React from "react"
import style from "./layout.module.css"
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
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className={style.layout}>
      <Header />
      <BackgroundImage
        Tag="section"
        className={style.background}
        fluid={data.background.childImageSharp.fluid}
      >
        <div className={style.content}>
          {/* Display inner HTML elements */}
          {children}
        </div>
        <Footer />
      </BackgroundImage>
    </div>
  )
}

export default Layout
