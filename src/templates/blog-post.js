import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import Img from 'gatsby-image'
import Seo from '../components/seo';
import { FaArrowRight, FaArrowLeft }  from 'react-icons/lib/fa'
import Author from '../components/author'
import CTA from '../components/cta'
import PostSuggestions from '../components/related'
import styled from 'styled-components'
import '../config/prismic.css'
import kebabCase from 'lodash/kebabCase';
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    EmailIcon,
  } from 'react-share';


export default function Template({data, pathContext}) {
    const post = data.markdownRemark;
    const {next, prev} = pathContext;
    const link = "http://desktopofsamuel.com/" + post.frontmatter.path; 

    const Related = styled.div`
        display: flex;
        justify-content: space-between;
    `

    const Share = styled.div`
        display: grid;
        grid-template-columns: repeat(3, auto);
        padding: 1em 0;
        grid-gap: 1em;
        width: 4em;
        cursor: pointer;
    `

    return(
        <div>
            <Seo data={post} />
            <div className="BlogContainer Blog">
                <div className="Content">
                <Share>
                    <FacebookShareButton url={link}><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton>
                    <TwitterShareButton url={link}><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>
                    <EmailShareButton url={link}><EmailIcon size={32} round={true}></EmailIcon></EmailShareButton>
                </Share>
                <small>{post.frontmatter.date} </small> 
                <h1>{post.frontmatter.title}</h1>
                <hr />

                <Img className="ContentWide Bottom-S" sizes={post.frontmatter.image.childImageSharp.sizes} />
                
                <div className="BlogContent" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                <div className="BlogNavigate">
                <div className="Previous">
                    {prev &&
                        <Link to={prev.frontmatter.path}>← Previous</Link>
                    }
                    </div>
                    <div className="Next" >
                    {next &&
                        <Link to={next.frontmatter.path}>Next → </Link>}
                    </div >
                </div>
                <hr />
                <div className="tag">
                Tagged with {post.frontmatter.tags.map((tag, index) => {
                    return (
                        <span key={index} className="tag">
                            <Link to={`/tags/${kebabCase(tag)}`}
                                  >
                            {tag}</Link>
                        </span>
                    )
                })}
                </div>
            </div>
            
            </div>
            <div className="Container">
            <Related>
            <div><Link to={post.fields.prevSlug}><h4>Last Article</h4><h5>{post.fields.prevTitle}</h5></Link></div>
            <div><Link to={post.fields.nextSlug}><h4>What's Next</h4><h5>{post.fields.nextTitle}</h5></Link></div>
            </Related>
            </div>
        

        </div>
    ) 
}

export const postQuery = graphql`
    query PostByPath($path: String!) {
        markdownRemark(
            frontmatter: { path: { eq: $path }}
        ){
            html
            excerpt(pruneLength: 250)
            frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY", locale: "en")
                tags
                intro
                image {
                    publicURL
                    size 
                    childImageSharp {
                        sizes(maxWidth: 1140) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                } 
            }
            fields {
                nextTitle
                nextSlug
                prevTitle
                prevSlug
                slug
              }
          }
        }

`
