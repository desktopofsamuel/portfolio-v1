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
                    <Zoom><div className="Column Grid-S" key={ post.node.id }>
                        <div className="LeftColumn Lower">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="RightColumn Blog">
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
                        </div>
                    </div></Zoom>
                    
                ))}
                <h6>Let's Talk About Apps </h6>
                <div className="Small-Blog-List">
                
                {data.AppTag.edges.map(post => (
                    <Zoom><Link to={post.node.frontmatter.path}><div className="Small-Blog" key={ post.node.id }>
                            <Img className="Bottom-XS" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <small>{post.node.frontmatter.date} </small>
                            <h4><span className="highlight">{post.node.frontmatter.title}</span></h4>
                            <br />
                    </div>
                    </Link></Zoom>
                ))}
                <div className="See-More"><Link to="/tags/app"><h5>See <br/>More</h5></Link></div>
                </div>
                {data.BlogAfter.edges.map(post => (
                    <Zoom><div className="Column Grid-S" key={ post.node.id }>
                        <div className="LeftColumn Lower">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="RightColumn Blog">
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
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
          }
        }
      }
    }
    AppTag: allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { tags: { in: "App" } }},
        limit: 2,
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
            excerpt(pruneLength: 250)
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