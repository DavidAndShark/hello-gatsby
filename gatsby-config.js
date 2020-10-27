/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A website on the internet!`,
    author: `David Stinson`,
    description: `David Stinson has successfully built a website on the internet!`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gnotes`,
        path: `${__dirname}/src/data/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
}
