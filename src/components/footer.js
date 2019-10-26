import React from "react"
import style from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * The site footer with navigation links
 */
const Footer = () => {
  return (
    <footer className={style.footer}>
      <small>
        Hack Pompey LTD is a non-profit organisation funded by partners and
        sponsors.<br/>If you would like to support us, please contact us at{" "}
        <a href="mailto:partners@hackpompey.co.uk">partners@hackpompey.co.uk</a>
      </small>

      <aside>
        <small>UK Company Number 11486057 (England & Wales)</small>
      </aside>

      <ul className={style.social}>
        <li>
          <a href="http://www.twitter.com/hackpompey" title="Twitter">
            <FontAwesomeIcon icon={["fab", "twitter"]} style={{color:"white"}} size="2x"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/groups/hackpompey/" title="Facebook">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} style={{color:"white"}} size="2x" />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com/hackpompey" title="Instagram">
            <FontAwesomeIcon icon={["fab", "instagram"]} style={{color:"white"}} size="2x" />
          </a>
        </li>
        <li>
          <a href="http://eepurl.com/glFL6H" title="Mailing List">
            <FontAwesomeIcon icon={["fas", "envelope"]} style={{color:"white"}} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
