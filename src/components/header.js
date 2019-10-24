import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./header.module.css"
import Menu from "react-burger-menu/lib/menus/push"

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

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#a62b4e",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  }

  return (
    <header className={style.header}>
      <Link to="/">
        <img
          src={data.logo.publicURL}
          className={style.logo}
          alt="Hack Pompey Logo"
        />
      </Link>
      <Menu
        width={ '15em'}
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Link to="/">About</Link>
        <Link to="/events/HackSustainability">Next Event</Link>
        <Link to="/media">Media</Link>
        <Link to="/events">Past Events</Link>
        <Link to="/team">Team</Link>
      </Menu>
    </header>
  )
}

export default Header
