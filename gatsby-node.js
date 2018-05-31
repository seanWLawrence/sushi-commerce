let path = require('path')
let {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  let {createNodeField} = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({node, getNode, basePath: 'pages'})
    createNodeField({node, name: 'slug', value: slug})
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  let {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(graphql(`
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    featuredImage {
                      src
                      alt
                    }
                    tags
                    date
                  }
                  html
                }
              }
            }
          }
        `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject('There was an error with the GraphQL query:', result.errors)
      }

      // Create pages for each markdown file.
      result
        .data
        .allMarkdownRemark
        .edges
        .forEach(({node}) => {
          let {
            fields: {
              slug
            },
            frontmatter: {
              featuredImage: {
                src
              }
            }
          } = node

          createPage({
            path: slug,
            component: path.resolve('src/templates/post.js'),
            layout: 'index',
            context: {
              slug,
              featuredImage: `/${src}/`
            }
          })
        })
    }))
  })
}
