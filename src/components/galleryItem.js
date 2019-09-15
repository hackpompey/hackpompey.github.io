import React from "react"
import style from "./galleryItem.module.css"

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
      "grid-column": "span " + spanWidth || 1,
      "grid-row": "span " + spanHeight || 1,
    }

    return (
      <article
        className={style.galleryItem}
        style={itemStyle}
        onClick={() => setSelected(item)}
      >
        {/* Render thumbnail if provided */}
        {hasThumb && <img src={thumbURL} alt={title} />}

        {/* Otherwise render text */}
        {!hasThumb && (
          <div
            className={style.galleryItemText}
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        )}
      </article>
    )
  }
}

export default GalleryItem
