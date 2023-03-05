import { useStaticQuery, graphql } from "gatsby"
import * as style from "./banner.module.css"
import React from "react"

const Banner = () => {
  const [marginTop, setMarginTop] = React.useState("6rem")

  const getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const shrinkOn = 200
    setMarginTop(distanceY > shrinkOn ? "3.2rem" : "6rem")
  }

  React.useEffect(() => {
    window.addEventListener("scroll", getWindowHeight)
    return function cleanup() {
      window.removeEventListener("scroll", getWindowHeight)
    }
  }, [])

  const data = useStaticQuery(graphql`
    {
      currentEvent: markdownRemark(
        frontmatter: { tags: { in: "Current Event" } }
      ) {
        fields {
          slug
        }
        fileAbsolutePath
        frontmatter {
          dateText
          location
          registration_link
        }
      }
    }
  `)

  if(!data.currentEvent) return <div></div>

  return (
    <div className={style.banner} style={{ top: marginTop }}>
      <div className={style.bannerInner}>
        <div className={style.textContainer}>
          <span className={style.text}>
            {data.currentEvent.frontmatter.dateText}&nbsp;
          </span>
          <span className={style.text}>
            @ {data.currentEvent.frontmatter.location}
          </span>
        </div>
        <div>
          <a
            className={style.bookButton}
            href={data.currentEvent.frontmatter.registration_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your FREE ticket
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
