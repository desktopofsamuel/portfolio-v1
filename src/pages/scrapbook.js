import React from 'react'
import Link from 'gatsby-link'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { Zoom, Slide, Fade } from 'react-reveal'
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: '0.1s',
    columnWidth: 500,
};

const ScrapbookPage = ({data}) => (
    <div>

        <Seo data="" />
        <Helmet title={`Scrapbook | Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com/scrapbook', },
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
                <Masonry options={masonryOptions} >
                {data.allMarkdownRemark.edges.map(post => (
                    <div className="scrap-post" key={ post.node.id }>
                            <small>{post.node.frontmatter.date} </small>
                            <Img width="250px" sizes={post.node.frontmatter.image.childImageSharp.sizes}></Img>
                            <h2><span className="highlight">{post.node.frontmatter.title}</span></h2>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
                    </div>
                    
                ))}
                </Masonry>
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
                image {
                    publicURL
                    size
                    childImageSharp {
                        sizes(maxWidth: 1140) {
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

export default ScrapbookPage