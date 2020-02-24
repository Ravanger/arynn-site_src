module.exports = {
  siteMetadata: {
    title: `ary hélène`,
    description: `artist and designer in toronto`,
    about: `hello! my name is arynn, i have been an artist for as long as i can remember, my late father taught me everything i know about creating artwork and it's always been a huge part of my life. i want to spend the rest of my days making beautiful art for everyone around me and for everyone who just happens to stumble upon me to enjoy.`,
    facebook: `https://www.facebook.com/artsyarynn`,
    twitter: `https://twitter.com/artsyarynn`,
    instagram: `https://www.instagram.com/artsyarynn`,
    email: `arynn@hotmail.ca`,
    author: `Boris rossovsky`,
    allwork: {
      title: `gallery`,
      subtitle: `all works`,
      description: `all pieces are for sale. contact for inquiries and prices.`,
    },
    acrylic: {
      title: `paintings`,
      subtitle: `acrylic works`,
      description: `i have been painting with acrylics for 20 years, my father was a painter and my entire childhood was spent painting with him.`,
    },
    ink: {
      title: `ink illustrations`,
      subtitle: `mixed media and ink`,
      description: `all of my ink drawings are done on thick crescent illustration paper and finished mixed media including pencil crayons and sometimes just a little bit of glitter <3`,
    },
    digital: {
      title: `digital artwork`,
      subtitle: `digital illustrations`,
      description: `all of my digital artwork is either created on procreate for ipad or with adobe programs such as illustrator and photoshop on my wacom cintique tablet`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/images/about.jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `allwork`,
        path: `${__dirname}/src/images/work`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
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
        display: `standalone`,
        icon: `src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
