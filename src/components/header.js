import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { FaTwitter, FaBehance, FaLinkedin } from 'react-icons/lib/fa';


const Header = ({ siteTitle }) => (

<div className="Container"> 
  <div className="Header">
    <div className="HeaderGroup">
      <div className="Logo">
        <Link to="/">Samuel W.</Link>

      </div>
      <div className="NavBar">
        <Link to="/about">About Me</Link>
        <Link to="/blog">Blog</Link>
        <div className="NavBarIcon">
          <a href="http://www.behance.com"><FaBehance /></a>
          <a href="http://www.linkedin.com"><FaLinkedin /></a>
          <a href="http://www.twitter.com/desktopofsamuel"><FaTwitter /></a>
        </div>
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
