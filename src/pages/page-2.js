import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './index.css'
import Emoji from '../components/emoji'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Skill from '../components/skill'
import ServiceBrandDesign from '../images/Service-BrandDesign.svg'
import ServiceWebDesign from '../images/Service-WebDesign2.svg'
import ServiceUIDesign from '../images/Service-UIDesign2.svg'
import HeroProjectLogo from '../images/HeroProject.svg'
import HeroBlogLogo from '../images/HeroBlog.svg'
import Card from '../components/card'
import MapWide from '../components/map-wide'
import MapMobile from '../components/map-mobile'
import MajorButton from '../components/majorbutton-a';
import Banner from '../components/banner'

const Grid = styled.div`
  grid-gap: 20px;
`

const MapSection = styled.section`
  position: relative;
  height: 720px;
  overflow: hidden;
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

`

const IntroWrapper = styled.div`
height: 500px;
overflow: scroll;

p {
  color: grey;
  font-size: 16px;
  
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
  
 <section className="">
  <div className="Container Padding-M">
      <div className="">
        <h6><Emoji symbol="🖥" label="Desk"/> Desktop of</h6>
        <h1>Samuel W.</h1>
        <div className="Width-70">
        <p>I'm a product designer currently based in Hong Kong. I deliver web / app projects in <a href="https://www.playa.hk" target="blank">Playa</a>, a web / app agency that I've co-founded.</p> <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college. </p>
        </div>
      </div>
      </div>

    </section>
    <section className="BG-Grey">
    <div className="Container Padding-M">
      <h6>I Can Help You With <Emoji symbol="🖱️" label="Computer-Mouse"/></h6>
      <Grid className="Grid33">
<Card icon={ServiceWebDesign} title="Web Design" content="From conception to production, I’m experienced in executing design for digital service website and web app." />
        <Card icon={ServiceUIDesign} title="UI/UX Design" content="I also work on mobile app project, crafting low-fi wireframes, interactive prototypes and production-ready assets." />
        <Card icon={ServiceBrandDesign} title="Brand Design" content="I help new brands launching their distinct and compelling key visual idendities to kickstart their start-up journey." />
      </Grid>
      </div>
  </section>
 <section>
        <MapSection>
          <Content className="CenterContainer">
          <Geo className="Grid50 Container">
                <div></div>
                <ContactWrapper><h3>A little bit about myself...</h3><IntroWrapper><p>My name is Samuel and I’m a UI/UX designer. I currently work at a web/app agency that I have co-founded in Hong Kong.</p>

<p>For the past 3 years, I have been delivering and crafting website and app projects for clients across sectors. I help clients to conceptualise their ideas into wireframes and prototypes, and to execute visual design and user interface by delivering high fidelity mock-ups.</p>


<p>Even though technology has become a major part of our lives nowadays, there is still a big gap of knowledge between people who build apps and people who use apps. Therefore, I started my agency years ago hoping to help small entrepreneurs and non-profits launching their projects. </p>


<p>Being a self-taught designer, I treasure every opportunity to be inspired to design better, for my clients, for delivering a bespoke experience and even for a better society. </p>


<p>I’m tech-savvy and many of my skillsets have been intertwined with my interest in technology. I embarked such journey after my one-year internship in Apple Inc, working as a cross-content intern in App & iTunes Store team  in 2013, where I learned to  deliver and publish digital content with scale and promote in Asia Pacific. I also took on the role to support my team’s operation with editorial schedules and local content research. </p>


<p>There’s still a lot of untapped areas waiting to be disrupted. I vision design as a major means to cross the barriers, by making technology more accessible. The intersection of liberal arts and technology, as stated by Steve Jobs has been my great source of inspiration. A well-designed digital products not only mean to solve users' need, but also be accessed with the right technology. The core needs and behaviour of mankind could be addressed with the right design, reaching a simple solution for complicated problems with simple solution.</p> </IntroWrapper></ContactWrapper>
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
            <div>
              <div className=""><img src={HeroBlogLogo}></img></div>
              <a href="/blog"><h6>Blog</h6></a>
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
                        <div>
                        <Img className="Bottom-XS" sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <MajorButton href={post.node.frontmatter.path} text="Read More"></MajorButton>
                            <br />
                    

                        </div>
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