import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import HeroProjectLogo from '../images/HeroProject.svg'

const WorkPage = ({ data }) => (
    <div className="SelectedWork Padding-S">
    <div className="HeroIcon">
        <div className="HeroIconWrapper Padding-S">
            <img src={HeroProjectLogo} alt="BlogLogo" width="100px" height="100px"></img>
        </div>
    </div>
    <div className="Container">
        
          
            
          <div className="">
          {data.PortfolioIndex.edges.map(post => (
              <div className="PortfolioIndex Padding-XS">
                <div className="">
                
                <div className="Grid50">
                  <div className="PortfolioIndexTitle">
                    <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                    <h3>{post.node.frontmatter.subtitle}</h3> 
                    <small>{post.node.frontmatter.category}</small><small> | </small><small>{post.node.frontmatter.date}</small>
                  
                  </div>
                  <div className="PortfolioIndexContent">
                    <p>{post.node.frontmatter.intro}</p>
                    <Link to={post.node.frontmatter.path}>View Case Study</Link>
                  </div>
                </div>
              </div>
              <div>
              <Link to={post.node.frontmatter.path}>
                <Img className="PortfolioIndexPhoto" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
              </Link>
              </div>
              </div>
          ))}
          </div>
    </div>
    </div>
)

export const pageQuery = graphql`
query WorkPage {
    front: file(relativePath: { eq: "/images/sprite_30fps.svg" }) {
      childImageSharp {
        sizes(maxWidth: 1440) {
          srcSet
        }
      }
    }
    PortfolioIndex: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {posttype: {eq: "project"}}}, limit: 4) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            path
            title
            date(formatString: "YYYY MMMM", locale: "en")
            tags
            subtitle
            intro
            category
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
  
  export default WorkPage
  