import React, { Component } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/lib/fa';
import Link from 'gatsby-link';

export default class PostSuggestions extends Component {
  render() {
    const { postNode } = this.props;
    const postFields = postNode.fields;
    return (
      <div className="post-suggestions md-grid md-cell--12">
        <Link to={postFields.prevSlug} className="post-suggestion">
          <FaArrowLeft />
          <div className="headline-container hide-on-mobile">
            <h2 className="md-body-2 secondary-color">Previous</h2>
            <h6 className="md-headline secondary-color">
              {postFields.prevTitle}
            </h6>
          </div>
        </Link>
        <Link to={postFields.nextSlug} className="post-suggestion">
          <div className="headline-container">
            <h2 className="md-body-2 secondary-color">Next</h2>
            <h6 className="md-headline secondary-color">
              {postFields.nextTitle}
            </h6>
          </div>
          <FaArrowRight />
        </Link>
      </div>
    );
  }
}