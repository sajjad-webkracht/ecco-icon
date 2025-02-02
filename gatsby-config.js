/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ecco Icon`,
    siteUrl: `https://www.eccoicon.com`
  },
  plugins: ["gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:400,500,600,700` // Specify the font weights you need
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons/`,
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-copy-files-enhanced`,
      options: {
        source: `${__dirname}/src/icons`,
        destination: `/icons`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-B7HHVBGL09"
        ]
      },
    },
  ]
};