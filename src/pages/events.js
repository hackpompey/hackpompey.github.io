import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EventBanner from "../components/eventBanner"
import SEO from "../components/seo"

/**
 * Page listing past events
 */
const EventsPage = ({ data }) => {
  const events = data.allMarkdownRemark.edges.map(i => i.node)
  const bannersSVG = data.bannersSVG.edges.map(i => i.node)
  const banners = data.banners.edges.map(i => i.node)

  return (
    <Layout>
      <SEO title="Events" />

      {/* List events */}
      {events.map((event, index) => (
        <EventBanner
          key={index}
          event={event}
          bannerSVG={bannersSVG.find(banner =>
            banner.fields.slug.endsWith(event.fields.slug)
          )}
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
    bannersSVG: allFile(
      filter: {
        fields: { slug: { regex: "//banners/events//" } }
        ext: { eq: ".svg" }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          publicURL
        }
      }
    }
    banners: allImageSharp(
      filter: { fields: { slug: { regex: "//banners/events//" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "Past Event" } } }
      sort: { order: DESC, fields: frontmatter___date }
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
            banner_background_image
            banner_foreground_color
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
