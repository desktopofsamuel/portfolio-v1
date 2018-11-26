import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import BlogListing from "../components/BlogListing/BlogListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from 'styled-components'
import NavButton from "../components/Navbutton/NavButton";
import PhotoIcon from "../../static/photography.svg";

class Index extends React.Component {
  

  render() {
    const postEdges = this.props.data.Main.edges;

    return (
      <Layout>
        <div className="index-container">
          <NavButton title="Hello" icon={PhotoIcon} to="/blog"></NavButton>
          <Helmet title={config.siteTitle} />
          <SEO />
          <BlogListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    Main: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
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
