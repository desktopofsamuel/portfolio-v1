import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <div>
            <Link to="/blog">Go Back </Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Published on {post.frontmatter.date} in {post.frontmatter.category} </h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
                category
            }
        }
    }
`
