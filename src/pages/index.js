import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <h1>Hi this is tom @ {data.site.siteMetadata.title}</h1>
  </Layout>
)

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`

export default IndexPage