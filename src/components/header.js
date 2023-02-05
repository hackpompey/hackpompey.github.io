import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as style from "./header.module.css"
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

  const [state, setState] = useState({ className: "" })

  const getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const shrinkOn = 200
    const className = distanceY > shrinkOn ? style.smaller : ""
    setState({ className })
  }

  useEffect(() => {
    window.addEventListener("scroll", getWindowHeight)
    return function cleanup() {
      window.removeEventListener("scroll", getWindowHeight)
    }
  },[])

  return (
    <header className={`${style.header} ${state.className}`}>
      <Link to="/">
        <img
          src={data.logo.publicURL}
          className={style.logo}
          alt="Hack Pompey Logo"
        />
      </Link>
      <Menu
        disableAutoFocus
        width={"15em"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        burgerButtonClassName={style["bmBurgerButton"]}
        burgerBarClassName={style["bmBurgerBars"]}
        crossButtonClassName={style["bmCrossButton"]}
        crossClassName={style["bmCross"]}
        menuWrapClassName={style["bmMenuWrap"]}
        menuClassName={style["bmMenu"]}
        morphShapeClassName={style["bmMorphShape"]}
        itemListClassName={style["bmItemList"]}
        itemClassName={style["bmItem"]}
        overlayClassName={style["bmOverlay"]}
      >
        <Link to="/">About</Link>
        <Link to="/events">Past Events</Link>
        <Link to="/media">Media</Link>
        <Link to="/team">Team</Link>
        <Link to="/conduct">Code of Conduct</Link>
      </Menu>
    </header>
  )
}

export default Header
