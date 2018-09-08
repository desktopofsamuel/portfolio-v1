import React from "react";
import Link from "gatsby-link"
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../config";
import favicon from "./favicon";
import facebookCover from "../images/Hero.svg";

const Seo = props => {
    const { data } = props;
    const postTitle = ((data || {}).frontmatter || {}).title;
    const postDescription = (data || {}).excerpt;
    const postCover = ((data || {}).frontmatter || {}).image;
    const postSlug = ((data || {}).frontmatter || {}).path;

    const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
    const description = postDescription ? postDescription : config.siteDescription;
    const siteurlimage = config.siteUrl + config.siteImage
    const image = postCover ? postCover.childImageSharp.sizes.src : siteurlimage;
    const url = config.siteUrl + config.pathPrefix + postSlug;

    return (
        <Helmet
            htmlAttributes={{
                lang: config.siteLanguage,
                prefix: "og: http://ogp.me/ns#"
            }}
        >
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="shortcut icon" type="image/svg" href="/static/favicon.png" />
            
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:creator"
                content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
            />
        </Helmet>
    );
};

export default Seo;