import React from "react"
import style from "./galleryItemSelected.module.css"

/**
 * Image, Video, or Text to display expanded over a gallery.
 *
 * par.item must be a markdown file for the media item
 */
class GalleryItemSelected extends React.Component {
  render() {
    const { item, setSelected } = this.props
    const meta = item.frontmatter
    const { title, mediaURL } = meta
    const mediaType = mediaURL ? meta.mediaType : "TEXT"
    return (
      <div>
        <div className={style.dimmer} onClick={() => setSelected(null)} />

        <article className={style.galleryItemSelected}>
          {/* Render heading */}
          <h1>{meta.title}</h1>

          <div className={style.scrollable}>
            {/* Render image if image-item */}
            {mediaType === "IMAGE" && <img src={mediaURL} alt={title} />}

            {/* Render video if video-item */}
            {mediaType === "VIDEO" && (
              <div className={style.videoResponsive}>
                <iframe src={mediaURL} title={title} />
              </div>
            )}

            {/* Render text */}
            {item.html.length>0 && (<div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: item.html }}
            />)}
            </div>
        </article>
      </div>
    )
  }
}

export default GalleryItemSelected
