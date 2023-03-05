import React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const SEO = ({ description, lang, meta, title, image }) => {
  const { site, splashIMG } = useStaticQuery(
    graphql`{
  site {
    siteMetadata {
      title
      description
      author
      siteUrl
    }
  }
  splashIMG: file(relativePath: {eq: "images/splash.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FIXED)
    }
  }
}
`
  )

  const metaDescription = description || site.siteMetadata.description

  const ogImageUrl =
    site.siteMetadata.siteUrl + (image || splashIMG.childImageSharp.gatsbyImageData.src)

  if (!title.startsWith("Hack Pompey")) {
    title = "Hack Pompey - " + title
  }

  return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: ogImageUrl,
          },
          {
            property: `twitter:image`,
            content: ogImageUrl,
          },
          {
            property: `image`,
            content: ogImageUrl,
          },
        ].concat(meta)}
      />
    </HelmetProvider>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
