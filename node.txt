const _ = require("lodash")
const path = require ('path');
const Promise = require("bluebird")

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        const pages = []
        const postTemplate = path.resolve('src/templates/blog-post.js');
        const projectTemplate = path.resolve('src/templates/project-post.js');
        const tagTemplate = path.resolve('src/templates/tag-page.js');
        resolve(
            graphql(
                `
            {   
            allMarkdownRemark {
                edges {
                  node {
                      html
                      id
                      excerpt(pruneLength: 250)
                      frontmatter {
                          path
                          title
                          date
                          tags
                          posttype
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

        {/*path: `/work${edge.node.frontmatter.path}`,*/}

        result.data.allMarkdownRemark.edges.forEach(edge => {
            if (edge.node.frontmatter.posttype === 'project') {
                createPage({
                    path: edge.node.frontmatter.path,
                    component: projectTemplate,
                    cotext: {

                    }

                });
            }   
            else {
                createPage({
                    path: edge.node.frontmatter.path,
                    component: postTemplate,
                    context: {
                    },
                })
            }
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
        
    })
)

    


        /*_.each(result.data.allMarkdownRemark.edges, ({node}, index ) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
                context: {
                    prev: index === 0 ? null : posts[index - 1].node,
                    next: index === posts.length - 1 ? null : posts[index + 1].node,
                  },
            })
        })*/
        

})
}  