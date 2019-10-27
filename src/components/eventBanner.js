import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackgroundImage from "gatsby-background-image"
import style from "./eventBanner.module.css"
import EventBannerBackground from "./eventBannerBackground"

/**
 * Banner displaying metadata about an event, linking to the event page
 */
const EventBanner = ({ details, bannerSVG, bannerIMG, bannerBG }) => {
  const meta = details.frontmatter
  const eventPageURL = details.fields.slug

  // Text colour
  const customStyle = {}
  if (meta.banner_foreground_color) {
    customStyle["color"] = meta.banner_foreground_color
  }

  return (
    <EventBannerBackground
      backgroundStyle={meta.banner_background}
      backgroundIMG={bannerBG}
    >
      <div style={customStyle}>
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
                <a href={meta.registration_link} target="_blank">
                  <FontAwesomeIcon icon={["fas", "ticket-alt"]} /> Tickets
                </a>
              </li>
            )}

            {/* Writeup link if set */}
            {meta.writeup_link && (
              <li>
                <a href={meta.writeup_link} target="_blank">
                  <FontAwesomeIcon icon={["fas", "newspaper"]} /> Write up
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>
    </EventBannerBackground>
  )
}

export default EventBanner
