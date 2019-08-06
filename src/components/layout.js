import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ data }) => {
  const post = data.markdownRemark

  
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Layout