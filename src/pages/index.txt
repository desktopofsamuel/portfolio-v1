import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Emoji from '../components/emoji'
import Footer from '../components/footer'
import Seo from '../components/seo'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Skill from '../components/skill'


const IndexPage = ({ data }) => (
  
<div>
    <Seo data="" />
    <Helmet title={`Desktop of Samuel`} meta={[
      { property: 'og:url', content: 'http://desktopofsamuel.com', },
      ]}> > </Helmet>
    <div className="Hero Full-Width">
      <div className="shapeshifter play30"></div>
      <div className="Container">
      <div className="">
      <div className="TextContainer Padding-S">
          <h6>Hey there <Emoji symbol="✌🏻" label="Victory-Hand"/> </h6>
          <h3>My name is <strong>Samuel</strong>.</h3>
          <h3>I love to solve problems with design.</h3>
          <p>I'm currently working at <a href="https://playa.hk">Playa</a>, a web / app agency that I've co-founded in Hong Kong, crafting projects like <Link to="/waterforfree">Water For Free</Link> and <Link to="/hyperair">Hyperair</Link>. </p>
          <p>Before that, I was the cross-content intern at iTunes & App Store, Apple. </p>
        </div>
      </div>
      </div>
    </div>
    {/*<section className="S-Skill Padding-M Full-Width">
    <div className="Container">
      <div className="IconContainer">
        <svg className="MainIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6C0 2.68629 2.68629 0 6 0H19C22.3137 0 25 2.68629 25 6V19C25 22.3137 22.3137 25 19 25H6C2.68629 25 0 22.3137 0 19V6Z" fill="#F1F397"/>
        <path d="M12.632 15.8247C11.7775 16.0851 11.0711 15.961 10.353 15.4228C10.0489 15.194 9.52777 14.5655 9.49832 12.9414C9.49206 12.7165 9.63109 12.5063 9.84177 12.4253C9.9961 12.3609 10.1583 12.3069 10.3216 12.2586C11.16 12.0072 12.7432 11.7358 13.9255 12.7882C14.0535 12.9012 14.1305 13.0593 14.1454 13.2349C14.1898 13.7917 14.1965 15.1346 13.2734 15.5683C13.044 15.6765 12.8344 15.7632 12.632 15.8247ZM10.4128 12.5568C10.2553 12.604 10.1046 12.6559 9.95596 12.7193C9.86731 12.7536 9.8066 12.8423 9.80652 12.9375C9.81935 13.4525 9.90976 14.7025 10.5372 15.1684C11.1658 15.64 11.7796 15.7457 12.5339 15.5218C12.7249 15.4624 12.9183 15.3847 13.1373 15.2844C13.3885 15.1662 13.9554 14.7334 13.829 13.2582C13.8233 13.1641 13.7775 13.0775 13.7129 13.0182C12.6517 12.0741 11.1891 12.3229 10.4128 12.5568Z" fill="#95973B"/>
        <path d="M17.715 15.9716C16.9169 16.2155 16.1761 16.0979 15.6903 15.6591C14.9407 14.984 14.9592 13.9041 15.0411 13.3238C15.0776 13.0731 15.2213 12.856 15.4406 12.7259C15.7881 12.5184 16.1269 12.3601 16.4535 12.2635C18.2303 11.7242 18.9722 13.0906 18.9801 13.101C18.9901 13.123 19.0002 13.1449 18.9987 13.169C19.0057 13.3342 19.0497 14.8129 18.8261 15.2709C18.6956 15.5271 18.2383 15.8146 17.715 15.9716ZM16.5344 12.5696C16.2365 12.6609 15.9185 12.8034 15.5929 13.0009C15.459 13.0794 15.3656 13.2157 15.3475 13.3737C15.2778 13.8923 15.2551 14.854 15.8982 15.436C16.4701 15.9539 17.2926 15.7768 17.6191 15.6802C18.1424 15.5232 18.4687 15.2661 18.5288 15.1419C18.683 14.8217 18.6861 13.6911 18.6714 13.23C18.565 13.0416 17.9397 12.1412 16.5344 12.5696Z" fill="#95973B"/>
        <path d="M15.2815 13.3384C15.2309 13.3537 15.176 13.3461 15.133 13.3066C14.6615 12.9127 14.1129 13.348 14.0921 13.3638C14.0249 13.4179 13.9277 13.4063 13.8679 13.3402C13.8137 13.2729 13.8253 13.1756 13.8914 13.1157C14.1542 12.9002 14.7949 12.6083 15.3355 13.0547C15.4047 13.1072 15.4115 13.2071 15.359 13.2763C15.3357 13.3104 15.3091 13.3273 15.2815 13.3384Z" fill="#95973B"/>
        <path d="M9.61519 12.9068C9.56238 12.9096 9.5109 12.8891 9.47858 12.8404C9.1149 12.3453 8.47816 12.6369 8.45417 12.6472C8.37604 12.6838 8.28441 12.6493 8.24209 12.5707C8.20561 12.4925 8.2401 12.4008 8.31857 12.3584C8.62527 12.2119 9.31716 12.0816 9.73548 12.6443C9.79012 12.7118 9.77279 12.8104 9.70532 12.8651C9.6745 12.8926 9.64468 12.9026 9.61519 12.9068Z" fill="#95973B"/>
        <path d="M18.1703 7.42095C17.09 6.08833 15.7778 5.40513 15.679 5.35503C14.4073 4.6063 12.9099 4.82215 11.8835 5.13473C10.9915 5.40641 10.3381 5.77071 10.1907 5.85615C10.1907 5.85615 4.3895 6.45779 5.85239 13.7128C5.89785 13.7306 5.94874 13.7212 5.98979 13.6871C6.06267 13.6261 6.13934 13.5855 6.21887 13.5601C6.55826 13.4599 6.88305 13.7051 6.884 13.7102C7.21354 13.9809 7.54863 14.4509 7.8721 15.1128C7.92956 15.2233 8.05576 15.2789 8.17599 15.2459C8.27078 15.2177 8.33572 15.1423 8.35425 15.044C8.3533 15.0389 8.35744 15.0329 8.35649 15.0278L8.47001 12.84C8.47938 12.6643 8.53422 12.5065 8.63451 12.3666C9.08311 11.7505 9.81737 9.92679 10.1619 9.03495C10.2449 9.45174 10.3961 10.0087 10.6597 10.3496C10.7156 10.4236 10.8107 10.4533 10.8953 10.427C10.9646 10.4035 11.0232 10.3504 11.0414 10.2785C11.0446 10.2674 11.0478 10.2562 11.0459 10.246C11.0788 9.66003 11.2454 9.02804 11.5519 8.32778C11.6483 8.64719 11.8772 9.08423 12.3591 9.66387C12.401 9.71932 12.4729 9.73755 12.5381 9.72013C12.6227 9.69381 12.6705 9.61111 12.6543 9.5245C12.5577 9.0628 12.922 8.13565 13.1508 7.63967C13.5456 8.11957 14.6737 9.45384 15.2397 9.8913C15.302 9.94295 15.3831 9.95419 15.4584 9.93487C15.5879 9.89492 15.6577 9.76068 15.6228 9.63012L15.1935 8.2025C15.8111 8.49328 17.2796 9.25276 17.8106 10.1237C18.2868 10.9838 18.6096 12.0939 18.7963 13.5193C18.8026 13.5814 18.8538 13.6299 18.9186 13.6389C18.9399 13.6402 18.9561 13.6424 18.9756 13.6335C19.0153 13.6208 18.99 13.6739 19.0088 13.6335C20.1211 10.8432 19.1939 8.67455 18.1703 7.42095Z" fill="#95973B"/>
        </svg>

      </div>
    <h2 className="SectionTitle Yellow">Let's Make A List</h2>
      <div className="Grid25">
        <div><h6>I'm good at</h6><ol><li>Wireframing</li><li>Prototyping</li><li>UI Design</li><li>Visual Design Strategy</li><li>Brand Design</li></ol></div>
        <div><h6>I love</h6><ol><li></li><li>Wireframing</li><li>Wireframing</li></ol></div>
        <div><h6>Lesiure</h6><ol><li>Wireframing</li><li>Wireframing</li><li>Wireframing</li></ol></div>
        <div><h6>Fun Fact</h6><ol><li>Wireframing</li><li>Wireframing</li><li>Wireframing</li></ol></div>
      </div>
      <div className="Grid50">
        <div>
          <h6>I'm good at</h6>
          <div className="Grid50"> 
          <p>Wireframing<br/> Prototyping <br/>UI Design</p>
          <p>Visual Design Strategy <br/> Brand Design</p>
          </div>
          <h6>I also help with:</h6>
          <div className="Grid50"> 
          <p>Photography</p>  
          <p>Video Production</p>
          </div>
        </div>
      </div>
    </div>
    </section>*/}
  <section className="S-Blog">
      <div className="Padding-S Container">
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
        <h2 className="SectionTitle Red">Lastest Blog</h2> 
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
)

export const pageQuery = graphql`
query LandingIndex {
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

export default IndexPage
