import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import Header from './header'
import style from './event.module.css'

const Event = ({ event }) => {
  // console.log(event)

  const meta = event.frontmatter

  const mdPathParts = event.fileAbsolutePath.split('/')
  const mdFileName = mdPathParts[mdPathParts.length - 1].split('.')[0]
  const pageurl = "/events/" + mdFileName

  return (
    <div className={style.hack}>

      {/* TODO: Change to image? */}
      <h3 className={style.hack__logo}>
        <Link to={pageurl}>
          {meta.title}
        </Link>
      </h3>


      <ul className={style.hack_details}>
        <li>{meta.datetext}</li>
        <li>{meta.location}</li>
      </ul>


      <ul className={style.hack__links}>
        <li><a href={meta.eventbrite_link}>Eventbrite</a></li>
        <li><a href={meta.writeup_link}>Write up</a></li>
      </ul>

    </div >
  )
}

export default Event