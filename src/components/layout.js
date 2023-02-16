import { useStaticQuery, graphql } from "gatsby"
import * as style from "./layout.module.css"
import Footer from "./footer"
import Header from "./header"
import React from "react"

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
    {
      background: file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div id="outer-container" className={style.layout}>
      <Header />
      <div id="page-wrap" className={style.content}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
