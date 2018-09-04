import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Emoji from '../components/emoji'
import Footer from '../components/footer'
import Socialbar from '../components/socialbar'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'


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
            <path d="M0 5.96981C0 2.67278 2.68629 0 6 0H19C22.3137 0 25 2.67278 25 5.96981V18.9044C25 22.2014 22.3137 24.8742 19 24.8742H6C2.68629 24.8742 0 22.2014 0 18.9044V5.96981Z" fill="#B3F3BD"/>
            <path fill-Rule="evenodd" clip-rule="evenodd" d="M8.07234 4.97484H18.0723V19.8994H8.07234V18.728L9.11897 18.1238C9.52486 17.8895 9.6644 17.3713 9.43063 16.9665C9.19687 16.5616 8.67832 16.4234 8.27243 16.6577L8.07234 16.7732V16.0512L9.11897 15.447C9.52486 15.2126 9.6644 14.6945 9.43063 14.2897C9.19687 13.8848 8.67832 13.7466 8.27243 13.9809L8.07234 14.0964V13.4642L9.11897 12.86C9.52486 12.6257 9.6644 12.1076 9.43063 11.7027C9.19687 11.2979 8.67832 11.1597 8.27243 11.394L8.07234 11.5095V10.7778L9.11897 10.1736C9.52486 9.93931 9.6644 9.42117 9.43063 9.01633C9.19687 8.61148 8.67832 8.47324 8.27243 8.70755L8.07234 8.82305V8.0818L9.11897 7.47761C9.52486 7.24329 9.6644 6.72515 9.43063 6.32031C9.19687 5.91547 8.67832 5.77723 8.27243 6.01153L8.07234 6.12704V4.97484Z" fill="#49CB74"/>
            <path d="M7.0748 7.27805C6.90776 7.37448 6.85033 7.58772 6.94654 7.75433C7.04274 7.92093 7.25614 7.97782 7.42318 7.8814L8.86989 7.04624C9.03693 6.94981 9.09436 6.73658 8.99815 6.56996C8.90195 6.40336 8.68855 6.34647 8.52151 6.4429L7.0748 7.27805Z" fill="#49CB74"/>
            <path d="M7.0748 9.97408C6.90776 10.0705 6.85033 10.2837 6.94654 10.4503C7.04274 10.617 7.25614 10.6738 7.42318 10.5774L8.86989 9.74226C9.03693 9.64583 9.09436 9.4326 8.99815 9.26599C8.90195 9.09938 8.68855 9.04249 8.52151 9.13892L7.0748 9.97408Z" fill="#49CB74"/>
            <path d="M6.94654 13.1368C6.85033 12.9702 6.90776 12.7569 7.0748 12.6605L8.52151 11.8253C8.68855 11.7289 8.90195 11.7858 8.99815 11.9524C9.09436 12.119 9.03693 12.3323 8.86989 12.4287L7.42318 13.2638C7.25614 13.3603 7.04274 13.3034 6.94654 13.1368Z" fill="#49CB74"/>
            <path d="M7.0748 15.2474C6.90776 15.3438 6.85033 15.5571 6.94654 15.7237C7.04274 15.8903 7.25614 15.9472 7.42318 15.8508L8.86989 15.0156C9.03693 14.9192 9.09436 14.7059 8.99815 14.5393C8.90195 14.3727 8.68855 14.3158 8.52151 14.4123L7.0748 15.2474Z" fill="#49CB74"/>
            <path d="M6.94654 18.4005C6.85033 18.2339 6.90776 18.0206 7.0748 17.9242L8.52151 17.0891C8.68855 16.9926 8.90195 17.0495 8.99815 17.2161C9.09436 17.3827 9.03693 17.596 8.86989 17.6924L7.42318 18.5276C7.25614 18.624 7.04274 18.5671 6.94654 18.4005Z" fill="#49CB74"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 6.16881C14.7761 6.16881 15 6.39154 15 6.66629L15 9.15371C15 9.42847 14.7761 9.6512 14.5 9.6512C14.2239 9.6512 14 9.42847 14 9.15371L14 6.66629C14 6.39154 14.2239 6.16881 14.5 6.16881ZM16.5 6.16881C16.7761 6.16881 17 6.39154 17 6.66629L17 11.1437C17 11.4184 16.7761 11.6411 16.5 11.6411C16.2239 11.6411 16 11.4184 16 11.1437L16 6.66629C16 6.39154 16.2239 6.16881 16.5 6.16881Z" fill="#9AF8B9"/>
          </svg>
          </div>
          <h2 className="SectionTitle Green">Selected Work</h2>
          
            
            <div className="Column Grid-Portfolio">
              <div className="LeftColumn">
                <div className="Image">
                  <img className="PortfolioImage" src="static/W4F3.png" />
                </div>
                
              </div>
              <div className="RightColumn">
              <h2>Water For Free</h2>
              <p>Water for Free is a mobile app that shows over 1600 locations of water dispensers in Hong Kong and Macau. It is an effort to reduce the vast amounts single-use beverage containers entering our landfills and oceans everyday.</p>
              </div>
            </div>
            <div className="Column Grid-Portfolio Reverse">
              <div className="LeftColumn">
                <div className="Image">
                    <img className="PortfolioImage" src="static/Hyperair5.png" />
                  </div>
              </div>
              <div className="RightColumn">
              <h2>Hyperair</h2>
              <p>Hyperair Travel & Service Provider are two apps that I've designed to create all-round travel experience for frequent travelers  </p>
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
        <h2 className="SectionTitle Red">Writings</h2> 
        <div>
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
      <div className="Container50 TextCenter CenterContainer">
        <div className="ContactWrapper Padding-M">
          <img style={{width:'90px',height:'90px'}} src="/static/propic.png" />
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
