const _ = require("lodash")
const path = require ('path');
const Promise = require("bluebird")


exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        const pages = []
        const postTemplate = path.resolve('src/templates/blog-post.js');
        const tagTemplate = path.resolve('src/templates/tag-page.js');
        graphql(`
        {
            allMarkdownRemark {
                edges {
                  node {
                      html
                      id
                      frontmatter {
                          path
                          title
                          date
                          tags
                    }
                  }
                }
              }
            }
        `
    ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          resolve()
          reject(result.errors);
        }

        _.each(result.data.allMarkdownRemark.edges, ({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })
        

        let tags = []
        _.each(result.data.allMarkdownRemark.edges, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
        })
        tags = _.uniq(tags)
        tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
            path: tagPath,
            component: tagTemplate,
            context: {
            tag,
            },
        })
        })

        resolve ()
    })
    })
}

// Add Lodash plugin
