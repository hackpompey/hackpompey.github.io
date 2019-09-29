import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Event from "../components/event"
import SEO from "../components/seo"

/**
 * Page listing past events
 */
const EventsPage = props => {
  console.log(props)
  const events = props.data.allMarkdownRemark.edges.map(i => i.node)
  const banners = props.data.banners.edges.map(i => i.node)

  return (
    <Layout>
      <SEO title="Events" />

      {/* List events */}
      {events.map((event, index) => (
        <Event
          key={index}
          event={event}
          banner={banners.find(banner =>
            banner.fields.slug.endsWith(event.fields.slug)
          )}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    banners: allImageSharp(
      filter: { fields: { slug: { regex: "//banners/events//" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/events//" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
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
      }
    }
  }
`
export default EventsPage
