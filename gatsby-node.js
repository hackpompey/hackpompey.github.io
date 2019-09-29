/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === "ImageSharp") {
    const slug = createFilePath({ node, getNode, basePath: `images` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//src/pages//" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Default markdown layout
      let layout = `./src/components/markdownPage.js`

      // Special layout for events
      if (node.fileAbsolutePath.includes("/events/")) {
        layout = `./src/components/eventPage.js`
      }

      createPage({
        path: node.fields.slug,
        component: path.resolve(layout),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
