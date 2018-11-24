import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import BlogListing from "../components/BlogListing/BlogListing";


class Work extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;

        return (
        <Layout>
            <div className="index-container">
            <BlogListing postEdges={postEdges}></BlogListing>
            </div>
        </Layout>
    );
    }
}

export default Work;
    
    /* eslint no-undef: "off" */
    export const pageQuery = graphql`
      query WorkQuery {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [fields___date], order: DESC }
          filter: {frontmatter: {posttype: {eq: "project"}}}
        ) {
          edges {
            node {
              fields {
                slug
                date
              }
              excerpt
              timeToRead
              frontmatter {
                title
                tags
                cover
                date
              }
            }
          }
        }
      }
    `;
    