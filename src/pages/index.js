import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import layoutStyle from "../components/layout.module.css"
import Countdown from "../components/countdown"

/**
 * The Homepage
 */
const IndexPage = ({ data }) => {
  let currentEventURL
  if (data.currentEvent) {
    const mdPathParts = data.currentEvent.fileAbsolutePath.split("/")
    const mdFileName = mdPathParts[mdPathParts.length - 1].split(".")[0]
    currentEventURL = "/events/" + mdFileName
  }
  return (
    <Layout>
      <SEO title="Hack Pompey" />

      <div className={layoutStyle.splash}>
        {data.currentEvent && (
          <div>
            <h1>
              Tickets now available for{" "}
              <a href="https://hackerfest.co.uk/events/cd8a07c8-bf75-4bfe-935c-9c288151ee72">
                {data.currentEvent.frontmatter.title}
              </a>
            </h1>
            <Countdown data={data.currentEvent.frontmatter} />
          </div>
        )}

        <Link to={currentEventURL}>
          <Img fluid={data.splash.childImageSharp.fluid} className={layoutStyle.splashimg} />
        </Link>

        <Link to="#about" className={layoutStyle.splashlink}>
          <h3>About Hack Pompey</h3>
        </Link>
        {data.currentEvent && (
          <Link to={currentEventURL} className={layoutStyle.splashlink}>
            <h3>Next Event</h3>
          </Link>
        )}
        <a
          href="https://hackerfest.co.uk/events/cd8a07c8-bf75-4bfe-935c-9c288151ee72"
          className={layoutStyle.splashlink}
        >
          <h3>Get Tickets</h3>
        </a>
      </div>

      <main className={layoutStyle.text}>
        <article>
          <section>
            <a
              id="about"
              style={{
                display: "block",
                position: "relative",
                top: "-150px",
                visibility: "hidden",
              }}
            />
            <h2>What is Hack Pompey?</h2>
            <p>
              Hack Pompey is the biggest hackathon on the South coast. We'll see
              people from all backgrounds and disciplines join together to learn
              something new, work together, and build something{" "}
              <strong>awesome!</strong>
            </p>
          </section>

          <section>
            <h2>What can I build?</h2>
            <p>
              You can build <strong>anything you want!</strong>
            </p>
            <p>
              But we know how daunting that can be, so we'll make things a
              little easier by setting themes to help get your brain ticking.
              Stay tuned for those announcements!
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
            <h2>When and where is it?</h2>
            <p>
              <Link to="/events/HackSustainability">The next Hack Pompey</Link>{" "}
              will take place on the 2nd and 3rd of November at the University
              of Portsmouth's Future Technology Centre. This year's theme is
              sustainability.
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
            <p>The events just wouldn't be possible without these legends!</p>
            <img
              src={data.partners.publicURL}
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
    partners: file(relativePath: { eq: "images/partners.svg" }) {
      publicURL
    }
    currentEvent: markdownRemark(
      frontmatter: { tags: { in: "Current Event" } }
    ) {
      fileAbsolutePath
      frontmatter {
        date
        title
      }
    }
    splash: file(relativePath: { eq: "splash.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
