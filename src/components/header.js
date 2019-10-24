import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./header.module.css"

/**
 * The site header with navigation links
 */
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(
          relativePath: { eq: "images/hack-pompey-logo-white-inline.svg" }
        ) {
          publicURL
        }
      }
    `
  )

  return (
    <header className={style.header}>
      <nav>
        <Link to="/events/HackSustainability">Next Event</Link>
        <Link to="/media">Media</Link>
        <Link to="/">
          <img
            src={data.logo.publicURL}
            className={style.logo}
            alt="Hack Pompey Logo"
          />
        </Link>
        <Link to="/events">Past Events</Link>
        <Link to="/team">Team</Link>
      </nav>
    </header>
  )
}

export default Header
