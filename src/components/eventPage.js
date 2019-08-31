import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Event from "./event"
import SEO from "./seo"

/**
 * Used by gatsby-node to generate pages from md files in src/pages/events/
 */
const EventPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />

      <Event event={data.markdownRemark} />

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
        dateText
        location
        eventbrite_link
        writeup_link
      }
    }
  }
`
export default EventPage
