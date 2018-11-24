import React from "react";
import { Link } from "gatsby";

class BlogListing extends React.Component {
  getBlogList() {
    const BlogList = [];
    this.props.postEdges.forEach(postEdge => {
      BlogList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return BlogList;
  }
  render() {
    const BlogList = this.getBlogList();
    return (
      <div>
        {/* Your post list here. */
        BlogList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <button>Read+</button>
          </Link>
        ))}
      </div>
    );
  }
}

export default BlogListing;
