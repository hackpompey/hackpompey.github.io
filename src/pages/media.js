import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SEO from "../components/seo"

/**
 * Page showing media from past events
 *
 * TODO: Should be arranged by year, event
 */
const MediaPage = props => {
  const items = props.data.allMarkdownRemark.edges.map(i => i.node)

  return (
    <Layout>
      <SEO title="Media" />
      <Gallery items={items} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//media//" } }) {
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
export default MediaPage
