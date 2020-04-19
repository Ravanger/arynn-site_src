require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://arynn.ca`,
    author: `Boris rossovsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://arynn.ca`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`],
          },
          {
            family: `Libre Baskerville`,
            variants: [`400`, `400i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? `http://strapi.arynn.ca`
          : `http://strapi.arynn.ca`,
        // : `http://localhost:1337`,
        contentTypes: [`art-pieces`, `art-categories`],
        singleTypes: [`site-metadata`],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 70,
        maxWidth: 680,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `infobubble`,
        path: `${__dirname}/src/images/icons/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arynn Fitzsimmons`,
        short_name: `Arynn`,
        start_url: `/`,
        lang: `en`,
        background_color: `#fcb8df`,
        theme_color: `#fcb8df`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{js,jsx,jpg,png,woff2,html,css}"],
        },
      },
    },
  ],
}
