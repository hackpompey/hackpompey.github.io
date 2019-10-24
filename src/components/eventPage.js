import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Event from "./event"
import SEO from "./seo"
import Gallery from "./gallery/gallery"
import style from "./markdown.module.css"
import layoutStyle from "./layout.module.css"

/**
 * Used by gatsby-node to generate pages from md files in src/pages/events/
 */
const EventPage = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(i => i.node)
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />

      <Event
        event={data.markdownRemark}
        bannerSVG={data.bannerSVG}
        banner={data.banner}
      />

      <main className={layoutStyle.text}>
        {/* Display Markdown content */}
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          style={{ margin: "3em 1em" }}
          className={style.md}
        />
      </main>

      <Gallery items={items} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bannerSVG: file(fields: { slug: { regex: $slug } }, ext: { eq: ".svg" }) {
      publicURL
    }
    banner: imageSharp(fields: { slug: { regex: $slug } }) {
      fluid(maxHeight: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
