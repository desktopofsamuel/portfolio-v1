import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import Author from '../components/author';

const ProjectPage = ({data}) => (
    <div>
        <div className="Container">
        <p>Project </p>
        </div>
        {data.allMarkdownRemark.edges.map(post => (
                    <div className="Column Grid-S" key={ post.node.id }>
                        <div className="LeftColumn">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="RightColumn Blog">
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
                        </div>
                    </div>
                    
                ))}
    </div>
)

export const pageQuery = graphql`
query ProjectIndex {
    site {
        siteMetadata {
        title
        }
    }
    allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: {posttype: {eq: "project"}}}
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                path
                title
                date
                tags
              	image {
                  childImageSharp {
                    sizes(maxWidth: 1140) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                              }
                  }
                }
          }
        }
      }
    }
  }
`

export default ProjectPage