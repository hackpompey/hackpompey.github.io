import React from "react"
import { Link } from "gatsby"
import style from "./event.module.css"

/**
 * Banner displaying metadata about an event, linking to the event page
 */
const Event = ({ event }) => {
  const meta = event.frontmatter

  // Determine URL of event page
  const mdPathParts = event.fileAbsolutePath.split("/")
  const mdFileName = mdPathParts[mdPathParts.length - 1].split(".")[0]
  const eventPageURL = "/events/" + mdFileName

  return (
    <div className={style.hack}>
      {/* TODO: Change to image? */}
      <h3 className={style.hack__logo}>
        <Link to={eventPageURL}>{meta.title}</Link>
      </h3>

      <ul className={style.hack_details}>
        <li>{meta.dateText}</li>
        <li>{meta.location}</li>
      </ul>

      <ul className={style.hack__links}>
        {/* Eventbrite link if set */}
        {meta.eventbrite_link && (
          <li>
            <a href={meta.eventbrite_link}>Eventbrite</a>
          </li>
        )}

        {/* Writeup link if set */}
        {meta.writeup_link && (
          <li>
            <a href={meta.writeup_link}>Write up</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Event
