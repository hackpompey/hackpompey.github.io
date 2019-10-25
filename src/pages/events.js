import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EventBanner from "../components/eventBanner"
import SEO from "../components/seo"

/**
 * Page listing past events
 */
const EventsPage = ({ data }) => {
  const events = data.events.edges.map(i => i.node)
  const bannerSVGs = data.bannerSVGs.edges.map(i => i.node)
  const bannerIMGs = data.bannerIMGs.edges.map(i => i.node)

  return (
    <Layout>
      <SEO title="Events" />

      {/* List events */}
      {events.map((details, index) => (
        <EventBanner
          key={index}
          details={details}
          bannerSVG={bannerSVGs.find(banner =>
            banner.fields.slug.endsWith(details.fields.slug)
          )}
          bannerIMG={bannerIMGs.find(banner =>
            banner.fields.slug.endsWith(details.fields.slug)
          )}
          bannerBG={bannerIMGs.find(banner =>
            banner.fields.slug.endsWith(
              details.fields.slug.slice(0, -1) + "BG/"
            )
          )}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    bannerSVGs: allFile(
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
    bannerIMGs: allImageSharp(
      filter: { fields: { slug: { regex: "//banners/events//" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    events: allMarkdownRemark(
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
