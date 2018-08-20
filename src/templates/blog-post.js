import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';
import Helmet from 'react-helmet'

export default function Template({data, pathContext}) {
    const post = data.markdownRemark

    return(
        <div>
            <Helmet
                title={`${post.frontmatter.title} | Desktop of Samuel`}
                meta={[
                { name: 'description', 
                content: `${post.excerpt}`},
                { name: 'og:description', 
                    content: `${post.excerpt}`},
                { name: 'keywords', content: `${post.frontmatter.tags}` },
                { name: 'og:type', content: 'article', },
                ]}
            /> 
            <div className="BlogContainer Blog">
                <div className="BackButtonWrapper">
                    <Link to="/blog">Back</Link>
                </div>
                <h1>{post.frontmatter.title}</h1>
                <small>Published on {post.frontmatter.date} in {post.frontmatter.tags.map((tag, index) => {
                    return (
                        <span key={index} className="tag">
                            <Link to={`tags/${tag}`}
                                  >
                            {tag}</Link>
                        </span>
                    )
                })}</small> 
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
            <Footer />
        </div>
    ) 
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            excerpt(pruneLength: 250)
            frontmatter {
                path
                title
                date
                tags
            }
        }
    }
`

