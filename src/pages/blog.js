import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import HeroBlogLogo from '../images/HeroBlog.svg'
import './blog.css'
import Seo from '../components/seo';

const BlogPage = ({data}) => (
    <div>
        <Seo data="" />
        <div className="HeroIcon">
            <div className="HeroIconWrapper Container Padding-M">
                <img src={HeroBlogLogo} alt="BlogLogo" width="100px" height="100px"></img>
            </div>
        </div>
        <div className="BlogIndex">
            <div className="Container">
                {data.allMarkdownRemark.edges.map(post => (
                    <div className="BlogEntry" key={ post.node.id }>
                        <div className="BlogDateWrapper">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="BlogMainWrapper Blog">
                            <Link to={post.node.frontmatter.path}><h3>{post.node.frontmatter.title}</h3></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
        <Footer />
    </div>
)

export const pageQuery = graphql`
query BlogIndex {
    site {
        siteMetadata {
        title
        }
    }
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
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