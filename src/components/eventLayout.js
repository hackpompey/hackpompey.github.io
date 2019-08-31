import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from './layout'
import Event from './event'

const EventLayout = ({ data }) => {

  return (
    <Layout>

      <Event event={data.markdownRemark}/>

      {/* Display Markdown content */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
        datetext
        location
        eventbrite_link
        writeup_link
      }
    }
  }
`

export default EventLayout