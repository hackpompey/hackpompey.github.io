import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as layoutStyle from "../components/layout.module.css"
import Splash from "../components/splash"

/**
 * The Homepage
 */
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Hack Pompey" />

      <Splash currentEvent={data.currentEvent} />

      <main className={layoutStyle.text}>
        <article>
          <span id="about" className={layoutStyle.anchor} />
          <section>
            <h2>What is Hack Pompey?</h2>
            <p>
              Hack Pompey is a social hackathon on the South coast. We see
              people from all backgrounds and disciplines join together to learn
              something new, work together, and build something{" "}
              <strong>awesome!</strong>
            </p>
          </section>

          <section>
            <h2>What can I build?</h2>
            <p>
              <strong>Anything you want!</strong>
            </p>
            <p>
              People typically come together to collaborate on solving problems,
              or work on an idea like a new product, service or game.
            </p>
            <p>
              We know how daunting coming up with ideas can be though, so we'll
              make things a little easier by setting themes to help get your
              brain ticking. Stay tuned for those theme announcements!
            </p>
          </section>

          <section>
            <h2>Do I need a team?</h2>
            <p>
              We believe that people have the most fun and build the best things
              when they work together.
            </p>
            <p>
              If you don't yet have a team, don't worry! There will be plenty of
              opportunity to form a team at the event.
            </p>
          </section>

          <section>
            <h2>Code of Conduct</h2>
            <p>
              Our hackathon is dedicated to providing a safe and comfortable
              environment and harassment-free experience for everyone regardless
              of their background.
            </p>
            <p>
              All attendees are bound by our{" "}
              <Link to="/conduct">Code of Conduct</Link>.
            </p>
          </section>

          <section>
            <h2>Some other things</h2>
            <ul>
              <li>
                <strong>Not a competition.</strong> Everyone is welcome, we care
                about this being a safe and fun environment.
              </li>
              <li>
                <strong>Not just coders.</strong> You don't need to have any
                level of skills, all areas welcome. Whether that be graphic
                design, coding, hardware, crafts, photography or literally
                anything.
              </li>
              <li>
                <strong>Bring your tools and equipment.</strong> Laptops, craft
                supplies, pen &amp; paper, Raspberry Pis. Whatever you need for
                your hacking/making!
              </li>
              <li>
                <strong>Free food and drink.</strong> Breakfast, lunch, snacks.
                Gotta keep you fueled throughout.
              </li>
            </ul>
          </section>

          <address>
            <p>
              If you have any other questions, please drop us a line at{" "}
              <a href="mailto:contact@hackpompey.co.uk">
                contact@hackpompey.co.uk
              </a>{" "}
              or reach out on social media (links below).
            </p>
          </address>

          <section>
            <h2>Partners</h2>
            <p>Hack Pompey just wouldn't be possible without these legends!</p>
            <img
              src="/unexpected-partners.svg"
              width="100%"
              alt="Partner Logos"
            ></img>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    currentEvent: markdownRemark(
      frontmatter: { tags: { in: "Current Event" } }
    ) {
      fields {
        slug
      }
      fileAbsolutePath
      frontmatter {
        date
        title
        registration_link
      }
    }
  }
`

export default IndexPage
