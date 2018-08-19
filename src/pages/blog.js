import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';

const BlogPage = ({data}) => (
    <div>
        <div className="Container">
            <h1>Blog Post</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={ post.node.id }>
                    <small>{post.node.frontmatter.date} </small>
                    <Link to={post.node.frontmatter.path}><h3>{post.node.frontmatter.title}</h3></Link>
                    <p>{post.node.excerpt}</p>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                </div>
            ))}
        </div>
        <Footer />
    </div>
)

export const pageQuery = graphql`
    query BlogIndex {
            allMarkdownRemark {
              edges {
                node {
                    id
                    excerpt(pruneLength: 250)
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

export default BlogPage