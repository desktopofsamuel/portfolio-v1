import React from 'react'
import Link from 'gatsby-link'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import { Zoom, Slide, Fade } from 'react-reveal'


const ScrapbookPage = ({data}) => (
    <div>

        <Seo data="" />
        <Helmet title={`Scrapbook | Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com/blog', },
      ]}> > </Helmet>
        
        <div className="BlogIndex">
            <div className="Container Padding-S">
                <div className="HeroIcon">
                    <div className="HeroIconWrapper Padding-S">
                        <img src={HeroBlogLogo} alt="BlogLogo" width="100px" height="100px"></img>
                        <h2>Scrapbook</h2>
                        <div className="Container CenterContainer"><p className="Grey Width-70">Articles I’ve written about design, technology and productivity. </p></div>
        
                    </div>
                </div>
                {data.allMarkdownRemark.edges.map(post => (
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
query ScrapbookIndex {
    site {
        siteMetadata {
        title
        }
    }
    allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {frontmatter: {posttype: {eq: "scrap"}}}
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

export default ScrapbookPage