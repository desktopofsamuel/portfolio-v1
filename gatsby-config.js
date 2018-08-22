module.exports = {
  siteMetadata: {
    title: 'Desktop of Samuel Wong',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
            'gatsby-remark-emoji',
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `util/typography.js`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src'
      }
    },
  ],
}
