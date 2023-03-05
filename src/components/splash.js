import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./splash.module.css"
import Countdown from "./countdown"

const Splash = ({ currentEvent }) => {
  const data = useStaticQuery(graphql`
    {
      splashIMG: file(relativePath: { eq: "images/splash.png" }) {
        childImageSharp {
          gatsbyImageData(height: 400, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `)

  let currentEventURL
  let registrationURL
  if (currentEvent) {
    currentEventURL = currentEvent.fields.slug
    registrationURL = currentEvent.frontmatter.registration_link
  }

  return (
    <div className={style.splash}>
      <div className={style.tagline}>
        {/* If there's an upcoming event, display countdown */}
        {currentEvent && (
          <Countdown
            data={currentEvent.frontmatter}
            className={style.tagline}
          />
        )}
        {/* If there's no upcoming event, use generic tagline */}
        {!currentEvent && <h3>Meet New People, Make Something Awesome!</h3>}
      </div>

      <Link to={currentEventURL || "#about"}>
        <GatsbyImage
          image={data.splashIMG.childImageSharp.gatsbyImageData}
          className={style.splashimg}
        />
      </Link>

      <a href="#about" className={style.splashlink}>
        <h3>About Hack Pompey</h3>
      </a>
      {currentEvent && (
        <Link to={currentEventURL} className={style.splashlink}>
          <h3>Event Info</h3>
        </Link>
      )}
      {!currentEvent && (
        <Link to="/events" className={style.splashlink}>
          <h3>Past Events</h3>
        </Link>
      )}
      {registrationURL && (
        <a
          href={registrationURL}
          className={style.splashlink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Get Tickets</h3>
        </a>
      )}
    </div>
  )
}

export default Splash
