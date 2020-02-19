module.exports = {
  siteMetadata: {
    title: `ary hélène`,
    description: `artist and designer in toronto`,
    about: `hello! my name is arynn, i have been an artist for as long as i can remember, my late father taught me everything i know about creating artwork and it's always been a huge part of my life. i want to spend the rest of my days making beautiful art for everyone around me and for everyone who just happens to stumble upon me to enjoy.`,
    facebook: `https://www.facebook.com/artsyarynn`,
    twitter: `https://twitter.com/artsyarynn`,
    instagram: `https://www.instagram.com/artsyarynn`,
    author: `Boris rossovsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arynn-fitzsimmons`,
        short_name: `arynn`,
        start_url: `/`,
        lang: `en`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
