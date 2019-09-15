import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./header.module.css"

/**
 * The site header with navigation links
 */
const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  siteTitle = siteTitle || site.siteMetadata.title

  return (
    <header className={style.header}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <nav>
        <Link to="/soon">Upcoming Events</Link>
        <Link to="/media">Media</Link>
        <Link to="/events">Past Events</Link>
        <Link to="/team">Team</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
