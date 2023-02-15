import React from "react"
import * as style from "./galleryItem.module.css"

/**
 * Image, Video, or Text to display in a gallery.
 *
 * par.item must be a markdown file for the media item
 */
class GalleryItem extends React.Component {
  render() {
    const { item, setSelected } = this.props
    const meta = item.frontmatter
    const { title, thumbURL, spanWidth, spanHeight } = meta
    const hasThumb = thumbURL && thumbURL !== "none"

    const itemStyle = {
      gridColumn: "span " + spanWidth || 1,
      gridRow: "span " + spanHeight || 1,
    }

    if (hasThumb) {
      itemStyle["backgroundImage"] = `url(${thumbURL})`
      itemStyle["backgroundPosition"] = "center"
      itemStyle["backgroundRepeat"] = "no-repeat"
      itemStyle["backgroundSize"] = "cover"
    }

    return (
      <article
        className={style.galleryItem}
        style={itemStyle}
        onClick={() => setSelected(item)}
      >
        {/* Otherwise render text */}
        {!hasThumb && (
          <div>
            {/* Render heading */}
            <h1>{title}</h1>
            <div
              className={style.galleryItemText}
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          </div>
        )}
      </article>
    )
  }
}

export default GalleryItem
