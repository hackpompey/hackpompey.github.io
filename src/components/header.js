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
        logo: file(
          relativePath: { eq: "images/hack-pompey-logo-white-inline.png" }
        ) {
          childImageSharp {
            fixed(height: 40) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <header className={style.header}>
      <nav>
        <Link to="/events/HackSustainability">Next Event</Link>
        <Link to="/media">Media</Link>
        <Link to="/" className={style.logo}>
          <Img fixed={data.logo.childImageSharp.fixed} style={{ top: "5px" }} />
        </Link>
        <Link to="/events">Past Events</Link>
        <Link to="/team">Team</Link>
      </nav>
    </header>
  )
}

export default Header
