import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer';

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <div>
            <div className="Container">
                <Link to="/blog">Go Back </Link>
                <hr />
                <h1>{post.frontmatter.title}</h1>
                <h4>Published on {post.frontmatter.date} in {post.frontmatter.tags.map((tag, index) => {
                    return (
                        <span key={index} className="tag">
                            <Link to={`tags/${tag}`}
                                  >
                            {tag}</Link>
                        </span>
                    )
                })}</h4> 
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
            frontmatter {
                path
                title
                date
                tags
            }
        }
    }
`
