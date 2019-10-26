import React from "react"
import style from "./eventBanner.module.css"
import BackgroundImage from "gatsby-background-image"

/**
 * Banner displaying metadata about an event, linking to the event page
 */
const EventBannerBackground = ({
  children,
  backgroundStyle,
  backgroundIMG,
}) => {
  if (backgroundIMG) {
    // Use background image if provided
    return (
      <BackgroundImage
        Tag="section"
        className={style.hack}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        backgroundColor={backgroundStyle}
        fluid={backgroundIMG.fluid}
        fadeIn={false}
      >
        {children}
      </BackgroundImage>
    )
  } else {
    // Otherwise use styling
    return (
      <section className={style.hack} style={{ background: backgroundStyle }}>
        {children}
      </section>
    )
  }
}

export default EventBannerBackground
