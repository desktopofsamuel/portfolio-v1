import React from 'react'
import Link from 'gatsby-link'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Seo from '../components/seo';
import Helmet from 'react-helmet';
import { Zoom, Slide, Fade } from 'react-reveal'
import ItemsCarousel from 'react-items-carousel';
import Img from "gatsby-image"

const TestPage = ({ data }) => (
    <div className="Container">
        <ItemsCarousel>
                {data.allMarkdownRemark.edges.map(post => (
                   <div className="Small-Blog" key={ post.node.id }>
                            <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <small>{post.node.frontmatter.date} </small>
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <br />
                            <hr />
                    </div>
                   
                ))} </ItemsCarousel>
    </div>
)
export const pageQuery = graphql`
query TestIndex { 
    allMarkdownRemark (
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
  }
`

export default TestPage