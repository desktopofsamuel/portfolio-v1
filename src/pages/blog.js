import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import HeroBlogLogo from '../images/HeroBlog.svg'
import './blog.css'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import Author from '../components/author';

const BlogPage = ({data}) => (
    <div>
        <Seo data="" />
        <Helmet title={`Blog of Samuel`} meta={[
      { property: 'og:url', content: 'http://beta.desktopofsamuel.com/blog', },
      ]}> > </Helmet>
        
        <div className="BlogIndex">
            <div className="Container Padding-M">
                <div className="HeroIcon">
                    <div className="HeroIconWrapper Padding-S">
                        <img src={HeroBlogLogo} alt="BlogLogo" width="100px" height="100px"></img>
                    </div>
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
        </div>
        <Author />
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