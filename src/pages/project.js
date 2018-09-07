import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import Author from '../components/author';
import Img from 'gatsby-image';

const ProjectPage = ({data}) => {
    /*const ProjectLink = `/work"${data.allMArkdownRemark.edges.node.frontmatter.path}" `
    <Link to={ "/work" + post.node.frontmatter.path} >*/

    return (
    <div>
        <div className="Container">
        <p>Project </p>
            <div className="ProjectGrid">
            {data.allMarkdownRemark.edges.map(post => (
                        <div className="" key={ post.node.id }>
                            <div className="">
                                <Img className="" sizes={post.node.frontmatter.image.childImageSharp.sizes} />

                                <Link to={post.node.frontmatter.path} ><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                                <p>{post.node.excerpt}</p>
                                <br />
                            </div>
                        </div>
                        
                    ))}
            </div>
        </div>
    </div>
)}

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