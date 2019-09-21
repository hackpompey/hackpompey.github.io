import React from "react"
import style from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"

// Make FontAwesome icons available without specific imports
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

/**
 * The standard structure used in all pages
 */
const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.content}>
        {/* Display inner HTML elements */}
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
