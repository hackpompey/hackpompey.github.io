import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from './layout'

const MarkdownLayout = ({ data }) => {

  return (
    <Layout>

      {/* Display Markdown content */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    </Layout>
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

export default MarkdownLayout