import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Event from "./event"
import SEO from "./seo"
import Gallery from "./gallery/gallery"

/**
 * Used by gatsby-node to generate pages from md files in src/pages/events/
 */
const EventPage = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(i => i.node)
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />

      <Event event={data.markdownRemark} banner={data.banner} />

      {/* Display Markdown content */}
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        style={{ margin: "3em 1em" }}
      />

      <Gallery items={items} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    banner: imageSharp(fields: { slug: { regex: $slug } }) {
      fixed(height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
        banner_background
        dateText
        location
        eventbrite_link
        writeup_link
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { slug: { regex: $slug } }
        fileAbsolutePath: { regex: "//media//" }
      }
    ) {
      edges {
        node {
          html
          fileAbsolutePath
          frontmatter {
            title
            thumbURL
            mediaURL
            mediaType
            spanWidth
            spanHeight
          }
        }
      }
    }
  }
`
export default EventPage
