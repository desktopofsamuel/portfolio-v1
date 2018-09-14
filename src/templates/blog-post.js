import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import Img from 'gatsby-image'
import Seo from '../components/seo';
import FaArrowRight from 'react-icons/lib/fa'
import Author from '../components/author'
import CTA from '../components/cta'


export default function Template({data, pathContext}) {
    const post = data.markdownRemark
    const {next, prev} = pathContext;

    return(
        <div>
            <Seo data={post} />
            <div className="BlogContainer Blog">
                <div className="Content">
                <small>{post.frontmatter.date} </small> 
                <h1>{post.frontmatter.title}</h1>
                <hr />

                {/*<Img className="ContentWide" sizes={post.frontmatter.image.childImageSharp.sizes} />*/}
                
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
                            <Link to={`tags/${tag}`}
                                  >
                            {tag}</Link>
                        </span>
                    )
                })}
                </div>
            </div>
            </div>
            <Author />
            <Footer />
            <CTA />
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
          }
        }

`
