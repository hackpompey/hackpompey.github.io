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
    <div>
      <Header />

      <div
        css={css`
          margin: 0 auto;
          max-width: 50em;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
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
