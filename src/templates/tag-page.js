import React from 'react'
import Link from 'gatsby-link'
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';

const TagPage = ({ pathContext, data}) => {
  const { tag } = pathContext;
  const tagHeader = `Tagged with "${tag}"`;
  const HelmetTitle = "Read some " + pathContext.tag + " articles | " + config.shortSiteTitle;
  const HelmetURL = config.siteUrl + "/tags/" + pathContext.tag;

  
  return (
    <div className="Container">
       <Seo data=""></Seo>
       <Helmet 
        title={HelmetTitle}
        meta={[
          { property: 'og:title', content: `${HelmetTitle}`},
          { property: 'og:url', content: `${HelmetURL}`},
        ]}
         />
        <Link to="../">Back</Link> 
        <h1>{tagHeader} </h1>
        {data.allMarkdownRemark.edges.map(post => (
            
            <div key={ post.node.id }>

                <h3>{post.node.frontmatter.title}</h3>
                <small>Published on {post.node.frontmatter.date} </small>
                <br />
                <p>{post.node.excerpt}</p>
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
            </div>
        ))}

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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

