module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-yaml', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`
      }
    }, {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`
      }
    },
    'gatsby-plugin-sass'
  ]
}
