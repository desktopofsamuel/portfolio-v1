import React from 'react'
import Link from 'gatsby-link'
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';
import kebabCase from 'lodash/kebabCase';

const TagPage = ({ pathContext, data}) => {
  const { tag } = pathContext;
  const tagHeader = `Tagged with "${tag}"`;
  const HelmetTitle = pathContext.tag + " Articles | " + config.shortSiteTitle;
  const HelmetURL = config.siteUrl + "/tags/" + kebabCase(pathContext.tag);

  
  return (
    <div className="Container Padding-S">
       <Seo data=""></Seo>
       <Helmet 
        title={HelmetTitle}
        meta={[
          { property: 'og:title', content: `${HelmetTitle}`},
          { property: 'og:url', content: `${HelmetURL}`},
        ]}
         />
         <section className="Top-S">
        <Link to="../">Back</Link> 
        <h1 className="Tax-Title">{tagHeader} </h1>
        {data.allMarkdownRemark.edges.map(post => (
            
            <div key={ post.node.id }>
                <br />
                <Link to={post.node.frontmatter.path}><h2><span className="highlight">{post.node.frontmatter.title}</span></h2></Link>
                <p>{post.node.excerpt}</p>
                <small>Published on {post.node.frontmatter.date} </small>
                <br />
                <br />
            </div>
        ))}
          </section>
    </div>
);
};

TagPage.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
};

export default TagPage


export const pageQuery = graphql`
  query PostByTag($tag: String!) {
    allMarkdownRemark(
      filter: { 
        frontmatter: { tags: { in: [$tag] } } 
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            tags
            path
          }
        }
      }
    }
  }
`;

