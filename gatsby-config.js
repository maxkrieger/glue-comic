module.exports = {
  pathPrefix: "/glue-comic",
  siteMetadata: {
    title: `Chatting with Glue`,
    description: `Cognitive Tools for Augmented Conversation`,
    author: `Max Krieger`,
    twitterUsername: `@maxkriegers`,
    image: `/images/cover.png`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: `UA-56010603-1`,
        head: true,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      defaultQuality: 99,
      pngCompressionSpeed: 2,
      pngCompressionLevel: 2,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#614AEC`,
        theme_color: `#614AEC`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
