import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import HeroProjectLogo from '../images/HeroProject.svg'
import styled from 'styled-components'
import MajorButton from '../components/majorbutton'

const ProjectTitleWrapper = styled.div`
    max-width: 70%;
    margin-bottom: 5vh;

    @media (max-width: 700px) {
        max-width: 100%;
    }
`

const ProjectContentWrapper = styled.div`
    max-width: 70%;   

    @media (max-width: 700px) {
        max-width: 100%;
    } 
`

const ProjectTitle = styled.h2`
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 0.75rem;
`

const ProjectSubtitle = styled.h3`
    color: #ffffff;
    font-size: 24px;
    margin-bottom: 0.75rem;
` 

const ProjectInfo = styled.small`
    color: #fff;
    opacity: 0.7;
`

const ProjectIntro = styled.p`
    color: #fff;
`

const WorkPage = ({ data }) => (
    <div>
    <Seo data="" />
    <Helmet title={`Project | Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com/project', },
      ]}>
    </Helmet>

    <div className="SelectedWork Padding-S">
    <div className="HeroIcon">
        <div className="HeroIconWrapper Padding-S">
            <img src={HeroProjectLogo} alt="BlogLogo" width="100px" height="100px"></img>
            <h2>Project</h2>
            <div className="Container CenterContainer"><p className="Width-70">My selected recent works, for more up-to-date work and design titbit. Feel free to follow my Behance and Twitter.</p></div>
        </div>
    </div>
    <div className=""> 
          <div className="">
          {data.PortfolioIndex.edges.map(post => (
              <section className="Full-Width PortfolioIndex Padding-XS" style={{ backgroundColor: `${post.node.frontmatter.color}`}}>
                <div className="Container">
                <div className="Bottom-XS">
                <Link to={post.node.frontmatter.path}>
                <Img className="PortfolioIndexPhoto" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                </Link>
                </div>
                <div className="TextCenter Padding-XS CenterContainer">
                <ProjectTitleWrapper>
                  <div className="PortfolioIndexTitle ">
                    
                    <ProjectTitle>{post.node.frontmatter.title}</ProjectTitle>
                    <ProjectSubtitle>{post.node.frontmatter.subtitle}</ProjectSubtitle>
                    <ProjectInfo>{post.node.frontmatter.category} | {post.node.frontmatter.date}</ProjectInfo>
                    
                  </div>
                  </ProjectTitleWrapper>
                  <ProjectContentWrapper>
                  <div className="PortfolioIndexContent">
                    <ProjectIntro>{post.node.frontmatter.intro}</ProjectIntro>
                    <MajorButton href={post.node.frontmatter.path} title={"View Case Study"}></MajorButton>
                  </div>
                  </ProjectContentWrapper>
                </div>
                </div>
              <div>
              </div>
            </section>
          ))}
          </div>
    </div>
    </div>
    </div>
)

export const pageQuery = graphql`
query ProjectPage {
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
            color
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
  