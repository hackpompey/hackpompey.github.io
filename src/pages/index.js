import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import layoutStyle from "../components/layout.module.css"
import Countdown from "../components/countdown"

/**
 * The Homepage
 */
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Hack Pompey" />

    <main className={layoutStyle.text}>
      <h1>
        Tickets now available for <br />
        <Link to="/events/HackSustainability">
          Hack Pompey 2019 - Sustainability
        </Link>
      </h1>

      <Countdown data={data.markdownRemark.frontmatter} />

      <article>
        <section>
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
            But we know how daunting that can be, so we'll make things a little
            easier by setting themes to help get your brain ticking. Stay tuned
            for those announcements!
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
            will take place on the 2nd and 3rd of November at the University of
            Portsmouth's Future Technology Centre. This year's theme is
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
              <strong>Not just coders.</strong> You don't need to have any level
              of skills, all areas welcome. Whether that be graphic design,
              coding, hardware, crafts, photography or literally anything.
            </li>
            <li>
              <strong>Bring your tools and equipment.</strong> Laptops, craft
              supplies, pen &amp; paper, Raspberry Pis. Whatever you need for
              your hacking/making!
            </li>
            <li>
              <strong>Free food and drink.</strong> Lunch, snacks and dinner
              y'all. Gotta keep you fueled throughout.
            </li>
            <li>
              <strong>Don't wanna hack or make?</strong> We'll have some areas
              to chill and play with cool tech.
            </li>
          </ul>
        </section>
      </article>

      <address>
        <p>
          If you have any other questions, please drop us a line at{" "}
          <a href="mailto:hackpompey@gmail.com">hackpompey@gmail.com</a> or{" "}
          <a href="http://twitter.com/hackpompey">tweet us</a>.
        </p>
      </address>

      {/* TODO: Add sponsor info
				<section>
					<h2>Previous Sponsors</h2>
					<span>The events just wouldn't be possible without these legends!</span>
				</section>

				<section>
					<img src="img/partners.svg" width="100%"></img>
        </section> 
        */}
    </main>
  </Layout>
)

export const query = graphql`
  query {
    markdownRemark(frontmatter: { tags: { in: "Current Event" } }) {
      frontmatter {
        date
      }
    }
  }
`

export default IndexPage
