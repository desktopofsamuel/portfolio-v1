import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Emoji from '../components/emoji'
import Footer from '../components/footer'
import Socialbar from '../components/socialbar';
import Seo from '../components/seo';
import Helmet from "react-helmet";


const IndexPage = ({ data }) => (
<div>
    <Seo data="" />
    <Helmet title={`Desktop of Samuel Home`} meta={[
      { property: 'og:url', content: 'http://beta.desktopofsamuel.com/', },
      ]}> > </Helmet>
    <div className="Hero AlignCenter">
      <div className="shapeshifter play30"></div>
      <div className="Container">
        <div className="TextContainer Padding-S">
          <h6>Hey there <Emoji symbol="✌🏻" label="Victory-Hand"/> </h6>
          <h3>My name is <strong>Samuel</strong>. I'm a UI designer who loves to solve problem with design.</h3>
          <p>I'm currently working at <a href="https://playa.hk">Playa</a>, a web / app agency that I've founded, delivering proejcts like <a href="http://bit.ly/waterforfreeios">Water For Free</a> and <a href="">HyperAir</a>. Before that, I was the cross-content intern at iTunes & App Store.</p>
        </div>
      </div>
    </div>
    <div className="Container Padding-M">
      <div className="SelectedWork">
        <div className="IconContainer">
            <svg className="MainIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="25" fill="none" />
              <rect width="25" height="25" rx="6.24" fill="#AFD1F7" />
              <path d="M20 15.7V10.6684C20 10.6228 19.999 10.5783 19.9934 10.5331C19.9558 10.2295 19.7158 8.96282 18.2836 8.18139C17.8858 7.96433 17.3581 7.51743 17.1363 7.12219C16.6356 6.2297 15.8386 5.79999 14.8152 5.79999H13.5765C12.8415 5.79999 12.1657 6.20318 11.8167 6.84999C11.4676 7.4968 10.7918 7.89999 10.0568 7.89999H7.6C6.16406 7.89999 5 9.06405 5 10.5V15.7C5 17.1359 6.16406 18.3 7.6 18.3H17.4C18.8359 18.3 20 17.1359 20 15.7Z"
              fill="#3284DC" />
              <rect width="8" height="8" fill="none" transform="translate(9.7 9)" />
              <ellipse cx="13.7" cy="13" rx="4" ry="4" fill="#CCE4FF" />
              <ellipse cx="13.7" cy="13" rx="3" ry="3" fill="#5FA4EE" />
            </svg>
          </div>
            <h2>Selected Work</h2>
            <div className="Image">
              <img className="PortfolioImage" src="static/W4F-1.png" />
            </div>
            <div className="Column Grid-M">
              <div className="LeftColumn">
                <h2>Water For Free</h2>
              </div>
              <div className="RightColumn">
              <p>Water for Free is a mobile app that shows over 1600 locations of water dispensers in Hong Kong and Macau. It is an effort to reduce the vast amounts single-use beverage containers entering our landfills and oceans everyday.</p>
              </div>
            </div>
            <img src="https://freight.cargocollective.com/t/original/i/8a4e49ae888985a7b60702baa9249324d9facfb14dffc6d172ad6cdbcc9dac64/Mockup2.png" />
            <div className="Column Grid-M">
              <div className="LeftColumn">
                <h2>Creation Cabin</h2>
              </div>
              <div className="RightColumn">
              <p>Creation Cabin is a Hong Kong independent publisher that supports local writers. I have participated in 2017 to build an online novel publishing platform to encourage creative writing in the city.</p>
        </div>
            </div>
    </div>
    </div>
    <section className="S-PhotoandBlog"> 
        <div className="BlogList Container Padding-M">
          <div className="IconContainer">
            <svg className="MainIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="25" fill="#000" fillOpacity="0" />
            <rect width="25" height="25" rx="6" fill="#FFBAB1" />
            <rect x="3.8" y="7.5" width="17.3" height="10" rx="1" fill="#FE8170" />
            <rect width="13.4" height="6.4" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
            <rect x="7.8" y="14.2" width="9.3" height="1.5" rx="0.75" fill="#FCC"/>
            <rect width="13.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(5.8 9.3)"/>
            <rect x="5.8" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="7.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="9.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC" />
            <rect x="11.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="13.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="15.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="17.7" y="9.3" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect width="11.4" height="1.5" fill="#000" fillOpacity="0" transform="translate(6.7 11.8)"/>
            <rect x="6.7" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="8.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="10.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="12.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="14.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            <rect x="16.6" y="11.8" width="1.5" height="1.5" rx="0.75" fill="#FCC"/>
            </svg>
        </div>
        <h2>Writings</h2> 
        <div className="Container">
                {data.allMarkdownRemark.edges.map(post => (
                    <div className="Column Grid-S" key={ post.node.id }>
                        <div className="LeftColumn">
                            <small>{post.node.frontmatter.date} </small>
                        </div>
                        <div className="RightColumn Blog">
                            <Link to={post.node.frontmatter.path}><h2><span className="highlight-grey">{post.node.frontmatter.title}</span></h2></Link>
                            <p>{post.node.excerpt}</p>
                            <br />
                            <hr />
                        </div>
                    </div>
                    
                ))}
            </div>
            </div>
  </section>
  
  
  <section className="S-Contact">
      <div className="Container50 Padding-M TextCenter CenterContainer">
        <div className="Test">
          <h1>Drop me a line</h1>
          <p>I'm interested in freelance projects and remote work, or feel free to ping me about design & technology. </p>
          <a href="mailto:desktopofsamuel@gmail.com">desktopofsamuel [at] gmail.com</a>
        </div>
      </div>
  </section>

  <Socialbar />

  

  <Footer id="#footer"/>
</div> 
)

export const pageQuery = graphql`
    query LandingIndex {
            allMarkdownRemark (
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 3
              ) {
              edges {
                node {
                    id
                    excerpt(pruneLength: 300)
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

export default IndexPage
