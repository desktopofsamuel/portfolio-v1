import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Samuel W.</h1>
    <p>Welcome to my new portfolio site.</p>
    <p>Now go build something great.</p>
    <div className="BlogList">
      <h3>Writings</h3>
      {data.allMarkdownRemark.edges.map(post => (
        <div>
          <small>Published on {post.node.frontmatter.date} </small>
          <h3>{post.node.frontmatter.title}</h3>
        </div>
      ))}
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const pageQuery = graphql`
    query LandingIndex {
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

export default IndexPage
