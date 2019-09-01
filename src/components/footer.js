import React from "react"
import style from "./footer.module.css"

/**
 * The site footer with navigation links
 */
const Footer = () => {
  return (
    <footer>
      <small>
        Hack Pompey LTD is a non-profit organisation funded by partners and
        sponsors. If you would like to support us, please contact us at{" "}
        <a href="mailto:partners@hackpompey.co.uk">partners@hackpompey.co.uk</a>
      </small>

      <aside>
        <small>UK Company Number 11486057 (England & Wales)</small>
      </aside>

      <ul class="social-links">
        <li class="social-link">
          <a href="http://www.twitter.com/hackpompey">
            <i class="fa fa-twitter"></i>
            <span class="social-link__name">Twitter</span>
          </a>
        </li>
        <li class="social-link">
          <a href="https://www.facebook.com/groups/hackpompey/">
            <i class="social-link__icon fa fa-facebook-official"></i>
            <span class="social-link__name">Facebook</span>
          </a>
        </li>
        <li class="social-link">
          <a href="http://www.instagram.com/hackpompey">
            <i class="social-link__icon fa fa-instagram"></i>
            <span class="social-link__name">Instagram</span>
          </a>
        </li>
        <li class="social-link">
          <a href="http://eepurl.com/glFL6H">
            <span class="social-link__name">Mailing List</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
