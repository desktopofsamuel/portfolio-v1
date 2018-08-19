import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Emoji from '../components/emoji'
import Footer from '../components/footer'
import Socialbar from '../components/socialbar';

const IndexPage = ({ data }) => (
<div>
    <div className="Hero">
      <div className="shapeshifter play30"></div>
      <div className="Container">
        <div className="TextContainer Padding-M">
          <h2>Hey there <Emoji symbol="✌🏻" label="Victory-Hand"/> </h2>
          <h2>My name is <strong>Samuel</strong>. I'm a UI/UX designer in Hong Kong focusing on bespoke user experience.</h2>
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
            <h3>Selected Work</h3>
        <h3>Water For Free t2 </h3>
        <p>Water for Free is a mobile app that shows over 1600 locations of water dispensers in Hong Kong and Macau. It is an effort to reduce the vast amounts single-use beverage containers entering our landfills and oceans everyday.</p>
        <h3>Creation Cabin</h3>
        <p>Creation Cabin is a Hong Kong independent publisher that supports local writers. I have participated in 2017 to build an online novel publishing platform to encourage creative writing in the city.</p>
        </div>
    </div>
    <section className="S-PhotoandBlog"> 
    <div className="Container Padding-M">
      <div className="HomeContent">
        <div className="PhotoList">
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
            <h3>Photography</h3>
          </div>
        <div className="BlogList">
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
        <h3>Writings</h3>
        <Link to="/page-2/">Page 2</Link>
          {data.allMarkdownRemark.edges.map(post => (
            <div>
              <small>{post.node.frontmatter.date} </small>
              <Link to={post.node.frontmatter.path}>
                <h3><span className="highlight">{post.node.frontmatter.title}</span></h3>
              </Link>
            </div>
          ))}
        </div>
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
            allMarkdownRemark {
              edges {
                node {
                    id
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
