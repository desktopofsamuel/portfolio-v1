import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Seo from '../components/seo';
import MajorButton from '../components/majorbutton-a';

export default function Template({data, pathContext}) {
    const post = data.markdownRemark
    const {next, prev} = pathContext;
    const CategoryURL = "/category/" + data.markdownRemark.frontmatter.category ;

    return(
        <div className="Container">
            <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
            <Seo data={post} />
            <div className="Padding-S">
                <div className="Content">
                <Link to={CategoryURL}><small>{post.frontmatter.category}</small></Link>
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <div className="BlogContent" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                <div className="CenterContainer"><MajorButton href={post.frontmatter.url} text={"Visit Site"}></MajorButton></div>
                
            </div>
            </div>
            <hr />
        </div>
    ) 
}
            {/*`/work${edge.node.frontmatter.path}`*/}
            {/*frontmatter: { posttype: { eq: "project" }}*/}
            {/*($path: String!)*/}

export const projectQuery = graphql`
query ProjectPostByPath($path: String!) {
    markdownRemark(
        frontmatter: { path: { eq:  $path} })
    {
        html
        excerpt(pruneLength: 250)
        frontmatter {
            path
            title
            date(formatString: "YYYY MMMM", locale: "en")
            tags
            subtitle
            category
            url
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
