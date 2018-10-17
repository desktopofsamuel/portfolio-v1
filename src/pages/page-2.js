import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './index.css'
import Emoji from '../components/emoji'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Skill from '../components/skill'
import HeroProjectLogo from '../images/HeroProject.svg'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Card from '../components/card'
import MapWide from '../components/map-wide'
import MapMobile from '../components/map-mobile'

const Grid = styled.div`
  grid-gap: 20px;
`

const MapSection = styled.section`
  position: relative;
  height: 720px;

  
`
const Content = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
`

const MapWideWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  width: 100%;
  height: 520px;
  overflow: hidden;

  @media (max-width: 700px) {
        display: none;
    }
`
const MapMobileWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    width: 100%;
    height: 720px;
    overflow: hidden;

    @media screen and (min-width: 701px) {
        display: none;
    }

`

const Index = ({ data }) => (

  <div>
    <Seo data="" />
    <Helmet title={`Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com', },
      ]}> > </Helmet>
      <div className="Container">
      <div className="Grid50">
      <section className="S-Blog">
      <div className="Padding-S">
        <h6>Latest Blog<Emoji symbol="✌🏻" label="Victory-Hand"/> </h6>
        <div className="IconContainer"><img className="MainIcon" src={HeroBlogLogo} width="25px"></img>
        </div><h2 className="SectionTitle Red">"Word" in progress</h2> 
        <div>
                {data.BlogIndex.edges.map(post => (
                    <div className="" key={ post.node.id }>
                        <div>
                        <Img className="Bottom-XS" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                        </div>
                    </div>
                    
                ))}
            </div>
            <hr />
            </div>   
  </section>
  <section className="S-Project">
      <div className="Padding-S">
        <h6>Latest Blog<Emoji symbol="✌🏻" label="Victory-Hand"/> </h6>
        <div className="IconContainer"><img className="MainIcon" src={HeroBlogLogo} width="25px"></img>
        </div><h2 className="SectionTitle Red">"Word" in progress</h2> 
        <div>
                {data.BlogIndex.edges.map(post => (
                    <div className="" key={ post.node.id }>
                        <div>
                        <Img className="Bottom-XS" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                        </div>
                    </div>
                    
                ))}
            </div>
            <hr />
            </div>   
  </section>
  </div>
  </div>
  
 <section className="BG-Grey">
  <div className="Container Padding-M">
    <div>
      <h6>I Can Help You With <Emoji symbol="✌🏻" label="Victory-Hand"/> </h6>
      <Grid className="Grid33">
<Card icon={HeroProjectLogo} title="Web Design" content="I can help you convert visitors into customers." />
        <Card icon={HeroProjectLogo} title="UI/UX Design" content="I specialise in helping project owners visualising their concepts into both high-fi and low-di design drafts." />
        <Card icon={HeroProjectLogo} title="Brand Design" content="I help new brands launching thier distinct and memorable key visual idenditiies to establish their online and offline presence." />
      </Grid>
    </div>
  </div>
 </section>
 <section>
        <MapSection>
          <Content className="CenterContainer">
          <h3>Hello from Hong Kong</h3>
          </Content>
          <MapWideWrapper><MapWide></MapWide></MapWideWrapper>
          <MapMobileWrapper><MapMobile></MapMobile></MapMobileWrapper>
        </MapSection>
      </section>
  </div> 
)

export const pageQuery = graphql`
query Index {
  front: file(relativePath: { eq: "/images/sprite_30fps.svg" }) {
    childImageSharp {
      sizes(maxWidth: 1440) {
        srcSet
      }
    }
  }
  BlogIndex: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1) {
    edges {
      node {
        id
        excerpt(pruneLength: 300)
        frontmatter {
          path
          title
          date
          tags
          image {
            publicURL
            size
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

export default Index