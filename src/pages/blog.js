import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
    <div>
        <h1>Blog Post</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id }>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Published on {post.node.frontmatter.date} </small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
            </div>
        ))}

    </div>
)

export const pageQuery = graphql`
    query BlogIndex {
            allMarkdownRemark {
              edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        category
                  }
                }
              }
            }
          }
`

export default BlogPage