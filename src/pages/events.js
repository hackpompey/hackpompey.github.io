import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Event from '../components/event'
import SEO from "../components/seo"

const Events = (props) => {

  const events = props.data.allMarkdownRemark.edges.map(i => i.node)

  return (
    <Layout>

      <SEO title="Events" />

      {/* List events */}
      {events.map((event, index) =>
        <Event key={index} event={event} />
      )}

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/\/events\//"}},
      sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges{
        node{
          fileAbsolutePath
          frontmatter {
            title
            datetext
            location
            eventbrite_link
            writeup_link
          }
        }
      }
    }
  }
`

export default Events