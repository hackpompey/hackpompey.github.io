import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import style from "./markdown.module.css"
import layoutStyle from "./layout.module.css"

/**
 * Used by gatsby-node to generate pages from any md files in src/pages/
 * Does not apply to src/pages/events/
 */
const MarkdownPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />

      {/* Display Markdown content */}
      <main className={layoutStyle.text}>
        <div
          className={style.md}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default MarkdownPage
