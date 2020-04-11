require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://arynn.ca`,
    author: `Boris rossovsky`,
    allwork: {
      title: `gallery`,
      subtitle: `all works`,
      description: `all pieces are for sale. contact for inquiries and prices.`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arynn-fitzsimmons`,
        short_name: `arynn`,
        start_url: `/`,
        lang: `en`,
        background_color: `#fcb8df`,
        theme_color: `#fcb8df`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
