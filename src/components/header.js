import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { FaTwitter, FaMedium, FaLinkedin } from 'react-icons/lib/fa';


const Header = ({ siteTitle }) => (

<div className="">
  <div className="Header">
    <div className="HeaderGroup">
      <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/blog">Blog</Link>  
      </div>
      <div className="NavBarRight">
      <div className="NavBarIcon">
          <a href="https://www.twitter.com/desktopofsamuel"><FaTwitter /></a>
          <a href="https://medium.com/@desktopofsamuel"><FaMedium /></a>
          <a href="https://www.linkedin.com/in/wongchunlong/"><FaLinkedin /></a>
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
