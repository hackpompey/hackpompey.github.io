import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./eventBanner.module.css"
import BackgroundImage from "gatsby-background-image"

/**
 * Banner displaying metadata about an event, linking to the event page
 */
const EventBanner = ({ details, bannerSVG, bannerIMG, bannerBG }) => {
  const meta = details.frontmatter

  // Determine URL of event page
  const mdPathParts = details.fileAbsolutePath.split("/")
  const mdFileName = mdPathParts[mdPathParts.length - 1].split(".")[0]
  const eventPageURL = "/events/" + mdFileName

  const customStyle = {}
  if (meta.banner_background) {
    // Background colour/gradient
    customStyle["background"] = meta.banner_background
  }
  if (bannerBG) {
    // Background image
    customStyle["backgroundImage"] = `url("..${bannerBG.fluid.src}")`
    customStyle["backgroundSize"] = "cover"
    customStyle["backgroundPosition"] = "center"
    customStyle["backgroundRepeat"] = "no-repeat"
  }
  if (meta.banner_foreground_color) {
    // Text colour
    customStyle["color"] = meta.banner_foreground_color
  }

  return (
    <div className={style.hack} style={customStyle}>
      <Link to={eventPageURL}>
        {/* Prefer SVG */}
        {bannerSVG && (
          <h3
            className={style.hack_logo}
            style={{
              backgroundImage: `url(${bannerSVG.publicURL})`,
              color: "rgba(0,0,0,0)",
            }}
          >
            {meta.title}
          </h3>
        )}
        {/* Otherwise optimised image */}
        {!bannerSVG && bannerIMG && (
          <BackgroundImage
            Tag="h3"
            className={style.hack_logo}
            fluid={bannerIMG.fluid}
            fadeIn={false}
          />
        )}
        {/* Otherwise event title */}
        {!bannerSVG && !bannerIMG && <h3>{meta.title}</h3>}
      </Link>

      <section className={style.hack_info}>
        <ul>
          <li>{meta.dateText}</li>
          <li>{meta.location}</li>
        </ul>

        <ul className={style.hack_links}>
          {/* Eventbrite link if set */}
          {meta.registration_link && (
            <li>
              <a href={meta.registration_link}>
                <FontAwesomeIcon icon={["fas", "ticket-alt"]} /> Eventbrite
              </a>
            </li>
          )}

          {/* Writeup link if set */}
          {meta.writeup_link && (
            <li>
              <a href={meta.writeup_link}>
                <FontAwesomeIcon icon={["fas", "newspaper"]} /> Write up
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default EventBanner
