import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Header from './header'

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
    </div>
  )
}


export default Layout