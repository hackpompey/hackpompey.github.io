import * as style from "./layout.module.css"
import Banner from "./banner"
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
  return (
    <div id="outer-container" className={style.layout}>
      <Header />
      <Banner />
      <div id="page-wrap" className={style.content}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
