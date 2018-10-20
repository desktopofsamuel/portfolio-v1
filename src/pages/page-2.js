import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './index.css'
import Emoji from '../components/emoji'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Zoom, Slide, Fade } from 'react-reveal'
import ServiceBrandDesign from '../images/Service-BrandDesign.svg'
import ServiceWebDesign from '../images/Service-WebDesign2.svg'
import ServiceUIDesign from '../images/Service-UIDesign2.svg'
import HeroProjectLogo from '../images/HeroProject.svg'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Card from '../components/card'
import MapWide from '../components/map-wide'
import MapMobile from '../components/map-mobile'
import MajorButtonA from '../components/majorbutton-a';
import MajorButton from '../components/majorbutton';
import Banner from '../components/banner'

const HeroText = styled.div`
h1 {
  font-weight: 600;
  letter-spacing: -0.8px;
  font-size: 64px;
  line-height: 1.25;

}
h1:first-child {
  margin: 0px;
}

h1:last-child {
  color: #625E6B;
}

@media (max-width: 700px) {
  h1 {
    font-size: 36px;
    line-height: 3rem;
  }
}
`

const Grid = styled.div`
  grid-gap: 20px;
`

const MapSection = styled.section`
  position: relative;
  height: 800px;
  overflow: hidden;

  @media (max-width: 700px) {
    height: auto;
  
  }
`
const Content = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
`

const Geo = styled.div`

`

const ContactWrapper = styled.div`
background-color: white;
box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.025);
padding: 30px;

@media (max-width: 700px) {
  margin: 10px;
}

`

const IntroWrapper = styled.div`
height: 600px;

p {
  color: grey;
  font-size: 16px;
}

@media (max-width: 700px) {
        height: auto;
    }

`

const MapWideWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  width: 100%;
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

const BorderBox = styled.div`
    margin: 50px 0;
    height: 30vh;
    border-left: 1px #e7e7e7 solid;

    @media (max-width: 700px) {
        display: none;
    }
`

const BlogWrapper = styled.div`
    h3 {
      font-weight: 600;
    }

    p {
      font-size: 16px;
    }
`

const QuoteBox = styled.div`
    margin-top: 20px;

    p {
      margin: 0;
      font-size: 18px;
      line-height: 30px;
    }


`

const Index = ({ data }) => (

  <div>
    <Seo data="" />
    <Helmet title={`Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com', },
      ]}> > </Helmet>
      <div className="Container">
      
  </div>
  
 <section className="Height-100-Mobile">
  <div className="Container Padding-M ">
      <div className="">
      <h6>Hi<Emoji symbol="👋" label="Wave-Hand"/> My name is</h6>
        <HeroText>
        <Fade><h1>Samuel Wong</h1></Fade>
        <Fade delay={100}><h1>I design stuff.</h1></Fade>
        </HeroText>
        <Fade bottom delay={150}>
        <div className="Width-70">
        <p>I'm a product designer currently based in Hong Kong. I deliver web / app projects in <a href="https://www.playa.hk" target="blank">Playa</a>, a web / app agency that I've co-founded.</p> <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college. </p>
        <AnchorLink href="#footer"><h6>Get In Touch</h6></AnchorLink>
        </div></Fade>
        
       
      </div>
      </div>

    </section>
    <section className="BG-Grey">
    <div className="Container Padding-S">
    <Zoom><h6>I Can Help You With <Emoji symbol="🖱️" label="Computer-Mouse"/></h6></Zoom>
        
        <div className="Grid33" style={{gridGap:"20px"}}>
        <Zoom><Card icon={ServiceWebDesign} title="Web Design" content="From conception to production, I’m experienced in executing design for digital service website and web app." /></Zoom>
        <Zoom delay={250}><Card icon={ServiceUIDesign} title="UI/UX Design" content="I also work on mobile app project, crafting low-fi wireframes, interactive prototypes and production-ready assets." /></Zoom>
        <Zoom delay={500}><Card icon={ServiceBrandDesign} title="Brand Design" content="I help new brands launching their distinct and compelling key visual idendities to kickstart their start-up journey." /></Zoom>
        </div>
        
      
      <div className="CenterContainer Top-XS"><Zoom delay={600}><MajorButton href="/work" text="View My Work"></MajorButton></Zoom></div>
      </div>
  </section>
 <section>
        <MapSection>
          <Content className="CenterContainer">
          <Geo className="Grid50 Container">
                <div></div>
                <ContactWrapper><h3>A little bit about myself...</h3><IntroWrapper className="Scroll"><p>Hello! I’m a UI/UX designer who visions design as a mean to cross the barriers between sectors, by making technology more accessible. I craft wireframes and prototypes and execute stunning visuals and user interfaces. </p>

<p>I started my agency Playa in 2015, hoping to help small entrepreneurs and non-profits launching their projects, bridging the gap between project owners and end-users. I am constantly learning and  treasure every opportunity to design better. I’m learning to code right now and this website is my first attempt.</p>
              </IntroWrapper></ContactWrapper>
                </Geo>
          </Content>
          <MapWideWrapper><MapWide></MapWide></MapWideWrapper>
          <MapMobileWrapper><MapMobile></MapMobile></MapMobileWrapper>
        </MapSection>
  </section>
  <Banner></Banner>
  <section className="Container">
  <div className="Grid40">
  <section className="S-Project">
      <div className="Padding-S">
        {/* <div className="IconContainer"><img className="MainIcon" src={HeroBlogLogo} width="25px"></img>
        </div><h2 className="SectionTitle Red">Project</h2> 
        <div>
                {data.PortfolioIndex.edges.map(post => (
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
             */}
            <div className="MobileCenter">
              <div><img src={HeroBlogLogo}></img></div>
              <a href="/blog"><h5>Blog</h5></a>
              <h2>I write about design, technology and productivity.</h2>
              <BorderBox />
              <QuoteBox>
              <p>"Bad design is smoke while good design is a mirror."</p>
              <small>Juan-Carlos Fernandez</small>
              </QuoteBox>
            </div>
        </div> 
  </section>
  <section className="S-Blog ">
      <div className="Padding-S">
        
        <div>
                {data.BlogIndex.edges.map(post => (
                    <div className="" key={ post.node.id }>
                        <BlogWrapper>
                        <Img className="Bottom-XS" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <Link to={post.node.frontmatter.path}><h3><span className="highlight">{post.node.frontmatter.title}</span></h3></Link>
                            <p>{post.node.excerpt}</p>
                            <MajorButton href={post.node.frontmatter.path} text="Read More"></MajorButton>
                            <br />
                    

                        </BlogWrapper>
                    </div>
                   
                    
                ))}
            </div>
            </div>   
  </section>
  
  
  </div>
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
  PortfolioIndex: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {posttype: {eq: "project"}}}, limit: 1) {
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