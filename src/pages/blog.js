import React from 'react'
import Link from 'gatsby-link'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import { Zoom, Slide, Fade } from 'react-reveal'
import Img from "gatsby-image"


const BlogPage = ({data}) => (
<div>
        <Seo data="" />
        <Helmet title={`Blog | Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com/blog', },
      ]}> > </Helmet>
        
        <div className="BlogIndex">
            <div className="Container Padding-S">
                <div className="HeroIcon">
                    <div className="HeroIconWrapper Padding-S">
                        <img src={HeroBlogLogo} alt="BlogLogo" width="100px" height="100px"></img>
                        <h2>Blog</h2>
                        <div className="Container CenterContainer"><p className="Grey Width-70">Articles I’ve written about design, technology and productivity. </p></div>
        
                    </div>
                </div>
                {data.BlogThree.edges.map(post => (
                    <Zoom><div className="Column Grid-S Blog-Post" key={ post.node.id }>
                        <div className="LeftColumn Lower">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="RightColumn Blog">
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <hr />
                            {post.node.frontmatter.tags.map((tag, index) => {
                    return (
                        <div className="tag-group"><span key={index} className="blog-tag">{tag}</span></div>)})}
                        </div>
                    </div></Zoom>
                    
                ))}
            </div>
        </div>
    </div>
)

export const pageQuery = graphql`
query BlogIndex {
    Site: site {
        siteMetadata {
        title
        }
    }
    BlogThree: allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "\/blogs/"}, frontmatter: { posttype: {ne: "scrap" }}},
        limit: 10,
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 150)
            frontmatter {
                path
                title
                date(formatString: "MMM DD, YYYY", locale: "en")
                tags
          }
        }
      }
    }
    AppTag: allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { tags: { in: "App" } }},
        limit: 3,
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                path
                title
                date(formatString: "MMM DD, YYYY", locale: "en")
                tags
                image {
                    childImageSharp {
                      sizes {
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
    BlogAfter: allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "\/blogs/"}, frontmatter: { posttype: {ne: "scrap" }}},
        skip: 3,
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 150)
            frontmatter {
                path
                title
                date(formatString: "MMM DD, YYYY", locale: "en")
                tags
          }
        }
      }
    }
  }
`

export default BlogPage