import React from "react"
import * as style from "./gallery.module.css"
import GalleryItem from "./galleryItem.js"
import GalleryItemSelected from "./galleryItemSelected"

/**
 * Page section containing a grid of media items that can be selected for an 
 * expanded view showing both media and text.
 *
 * items must be an array of markdown files for media items
 */
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedItem: null }
    this.setSelected = this.setSelected.bind(this)
  }

  setSelected(item) {
    this.setState({ selectedItem: item })
  }

  render() {
    const { items } = this.props
    const { selectedItem } = this.state

    return (
      <section>
        {/* Show selected item if any */}
        {selectedItem && (
          <GalleryItemSelected
            item={selectedItem}
            setSelected={this.setSelected}
          />
        )}

        <section className={style.gallery}>
          {/* List items */}
          {items.map((item) => (
            <GalleryItem
              key={item.fileAbsolutePath}
              item={item}
              setSelected={this.setSelected}
            />
          ))}
        </section>
      </section>
    )
  }
}

export default Gallery
