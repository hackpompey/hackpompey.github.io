import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./header.module.css"

/**
 * The site header with navigation links
 */
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "hack-pompey-logo-white.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )
  console.log(data)

  return (
    <header className={style.header}>
      <nav>
        <Link to="/soon">Next Event</Link>
        <Link to="/media">Media</Link>
        <Link to="/" className={style.logo}>
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Link>
        <Link to="/events">Past Events</Link>
        <Link to="/team">Team</Link>
      </nav>
    </header>
  )
}

export default Header
