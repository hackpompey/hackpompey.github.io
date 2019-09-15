import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Event from "../components/event"
import SEO from "../components/seo"

/**
 * Page listing past events
 */
const EventsPage = props => {
  const events = props.data.allMarkdownRemark.edges.map(i => i.node)

  return (
    <Layout>
      <SEO title="Events" />

      {/* List events */}
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages\/events//" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
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
    }
  }
`
export default EventsPage
