import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (

<div className="Container"> 
  <div className="Header">
    <div className="HeaderGroup">
      <div className="Logo">
        <Link to="/">Samuel W.</Link>

      </div>
      <div className="NavBar">
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/photography">Photography</Link>
      </div>
    </div>
  </div>
</div>


)
  /*
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
*/
export default Header
