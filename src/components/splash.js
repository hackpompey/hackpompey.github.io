import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./splash.module.css"
import Countdown from "./countdown"

const Splash = ({ currentEvent }) => {
  const { splashIMG } = useStaticQuery(
    graphql`
      query {
        splashIMG: file(relativePath: { eq: "images/splash.png" }) {
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  let currentEventURL
  let registrationURL
  if (currentEvent) {
    currentEventURL = currentEvent.fields.slug
    registrationURL = currentEvent.frontmatter.registration_link
  }

  return (
    <div className={style.splash}>
      {/* If there's an upcoming event, display basic event info */}
      {currentEvent && (
        <div>
          {/* Ticket link if available */}
          {registrationURL && (
            <h1>
              Tickets now available for{" "}
              <a href={registrationURL} target="_blank">{currentEvent.frontmatter.title}</a>
            </h1>
          )}
          {/* Otherwise just event name */}
          {!registrationURL && (
            <h1>
              Up Next{" "}
              <Link to={currentEventURL}>{currentEvent.frontmatter.title}</Link>
            </h1>
          )}
          <Countdown data={currentEvent.frontmatter} />
        </div>
      )}
      {/* If there's no upcoming event, use generic tagline */}
      {!currentEvent && (
        <div>
          <h1>Hack Pompey | A Portsmouth based social hack event!</h1>
          <h3>
            For announcements and future events{" "}
            <a href="http://eepurl.com/glFL6H" target="_blank">Join our mailing list</a>
          </h3>
        </div>
      )}

      <Link to={currentEventURL || "#about"}>
        <Img
          fluid={splashIMG.childImageSharp.fluid}
          className={style.splashimg}
        />
      </Link>

      <Link to="#about" className={style.splashlink}>
        <h3>About Hack Pompey</h3>
      </Link>
      {currentEvent && (
        <Link to={currentEventURL} className={style.splashlink}>
          <h3>Event Info</h3>
        </Link>
      )}
      {registrationURL && (
        <a href={registrationURL} className={style.splashlink} target="_blank">
          <h3>Get Tickets</h3>
        </a>
      )}
    </div>
  )
}

export default Splash
