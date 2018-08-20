import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ data }) => (
<Helmet>
    title={data.site.siteMetadata.title}
    meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
    ]}
</Helmet>
)

export const query = graphql`
  query BlogTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`