import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
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
    <div
      css={css`
        background: linear-gradient(
            rgba(20, 20, 20, 0.9),
            rgba(10, 10, 10, 0.95)
          ),
          url("https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/45567709_302230940385782_7862715282106613760_o.jpg?_nc_cat=106&_nc_oc=AQn2VF85G-DGYuRUGeJQXMoizeLA2grR5Ho75XDbSXdWWpvvLO2hk7ZN-4HLRbRCXms&_nc_ht=scontent-lht6-1.xx&oh=069a7594ad43fef8648ae638c81cf58e&oe=5E026A4B");
      `}
    >
      <Header />
      <div
        css={css`
          margin: 0 auto;
          max-width: 75em;
          background: rgb(255, 255, 255, 0.2);
          padding: ${rhythm(2)};
          padding-top: ${rhythm(4.5)};
        `}
      >
        {/* Display inner HTML elements */}
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
