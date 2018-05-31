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
    // prettier-ignore
    resolve(graphql(`
          {
            pages: allMarkdownRemark(filter: {
              frontmatter: {
                template: { 
                  eq: "page"
                }
              }
            }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    template
                    date
                    tags
                  }
                  html
                }
              }
            }
            posts: allMarkdownRemark(filter: {
              frontmatter: {
                template: {
                  eq: "post"
                }
              }
            }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title 
                    template 
                    date 
                    tags
                    featuredImage {
                      src
                      alt
                    }
                  }
                  html
                }
              }
            }
          }
        `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // create pages
      result
        .data
        .pages
        .edges
        .forEach(({node}) => {
          // map over all pages and get the url/slug
          let {fields: {
              slug
            }} = node;

          // create page with the page.js template and pass the slug as context so it can
          // be queried in the template
          createPage({
            path: slug,
            component: path.resolve('src/templates/page.js'),
            layout: 'index',
            context: {
              slug
            }
          })
        })

      // create post pages
      result
        .data
        .posts
        .edges
        .forEach(({node}) => {
          // map over all posts and get the url/slug and featuredImage.src value

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
          // create page with the post.js template and pass the slug and featuredImage.src
          // value as a regEx as context so it can be queried in the template
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