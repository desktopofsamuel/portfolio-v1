import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const IndexPage = ({ data }) => (
  <div>
    <h1>Samuel W.</h1>
    <p>Welcome to my new portfolio site.</p>
    <p>Now go build something great.</p>
    <div className="HomeContent">
      <div className="PhotoList">
        <div className="IconContainer">
            <svg className="MainIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="25" fill="#000" fillOpacity="0" />
            <rect width="25" height="25" rx="6" fill="#FFBAB1" />
            <rect x="3.8" y="7.5" width="17.3" height="10" rx="1" fill="#FE8170" />
            <rect width="13.4" height="6.4" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
            <rect x="7.8" y="14.2" width="9.3" height="1.5" rx="0.75" fill="#FCC"/>
            <rect width="13.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
            <rect x="5.8" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="7.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="9.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="11.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="13.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="15.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="17.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect width="11.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(6.7 11.8)"/>
            <rect x="6.7" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="8.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="10.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="12.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="14.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="16.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            </svg>
          </div>
          <h3>Photography</h3>
        </div>
      <div className="BlogList">
        <div className="IconContainer">
          <svg className="MainIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="25" height="25" fill="#000" fillOpacity="0" />
          <rect width="25" height="25" rx="6" fill="#FFBAB1" />
          <rect x="3.8" y="7.5" width="17.3" height="10" rx="1" fill="#FE8170" />
          <rect width="13.4" height="6.4" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
          <rect x="7.8" y="14.2" width="9.3" height="1.5" rx="0.75" fill="#FCC"/>
          <rect width="13.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
          <rect x="5.8" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
          <rect x="7.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
          <rect x="9.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
          <rect x="11.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="13.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="15.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="17.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect width="11.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(6.7 11.8)"/>
          <rect x="6.7" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="8.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="10.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="12.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="14.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          <rect x="16.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
          </svg>
        </div>
        <h3>Writings</h3>
        {data.allMarkdownRemark.edges.map(post => (
          <div>
            <small>{post.node.frontmatter.date} </small>
            <Link to={post.node.frontmatter.path}>
              <h3><span className="highlight">{post.node.frontmatter.title}</span></h3>
            </Link>
          </div>

        ))}
      </div>
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
