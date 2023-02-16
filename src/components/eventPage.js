import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import EventBanner from "./eventBanner"
import SEO from "./seo"
import Gallery from "./gallery/gallery"
import * as style from "./markdown.module.css"
import * as layoutStyle from "./layout.module.css"

/**
 * Used by gatsby-node to generate pages from md files in src/pages/events/
 */
const EventPage = ({ data }) => {
  const media = data.media.edges.map(i => i.node)
  const bannerIMGs = data.bannerIMGs.edges.map(i => i.node)
  const details = data.details
  return (
    <Layout>
      <SEO title={details.frontmatter.title} />

      <EventBanner
        details={details}
        bannerSVG={data.bannerSVG}
        bannerIMG={bannerIMGs.find(banner =>
          banner.fields.slug.endsWith(details.fields.slug)
        )}
        bannerBG={bannerIMGs.find(banner =>
          banner.fields.slug.endsWith(details.fields.slug.slice(0, -1) + "BG/")
        )}
      />

      <main className={layoutStyle.text}>
        {/* Display Markdown content */}
        <div
          dangerouslySetInnerHTML={{ __html: details.html }}
          style={{ margin: "3em 1em" }}
          className={style.md}
        />
      </main>

      <Gallery items={media} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bannerSVG: file(fields: { slug: { regex: $slug } }, ext: { eq: ".svg" }) {
      publicURL
    }
    bannerIMGs: allImageSharp(filter: { fields: { slug: { regex: $slug } } }) {
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
    details: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      fileAbsolutePath
      frontmatter {
        title
        banner_background
        banner_foreground_color
        dateText
        location
        registration_link
        writeup_link
      }
    }
    media: allMarkdownRemark(
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
