import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/lib/fa';
import ProfileIcon from '../images/HeroProfile.svg'
import BlogIcon from '../images/HeroBlog.svg'
import WorkIcon from '../images/HeroProject.svg'
import BookmarkIcon from '../images/HeroPin.svg'
import styled from 'styled-components'

const Button = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 2em;
`

const Icon = styled.img`
  height: 2.5em;
  margin: 0;
  margin-right: 1em;

`

const NavLink = styled.h4`
  height: auto;
  margin: 0;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
`

const Header = ({ siteTitle }) => (

<div className="Container">
  <div className="Header">
    <div className="HeaderGroup">
      <div className="NavBar">
      <Link exact to="/" activeClassName="active"><Button><Icon src={ProfileIcon} /><NavLink style={{color: "#95973B",}}>Home</NavLink></Button></Link>
      <Link to="/work" activeClassName="active"><Button><Icon src={WorkIcon} /><NavLink style={{ color: "#49CB74" }}>Work</NavLink></Button></Link>
      <Link to="/blog" activeClassName="active"><Button><Icon src={BlogIcon} /><NavLink style={{ color: "#FE8170" }}>Blog</NavLink></Button></Link>
      <a href="http://pins.desktopofsamuel.com"><Button><Icon src={BookmarkIcon} /><NavLink style={{ color: "#6469DA" }}>Pins</NavLink></Button></a>
      </div>
      {/* <div className="NavBarRight">
      <div className="NavBarIcon">
        <a href="https://dribbble.com/desktopofsamuel" target="blank"><FaDribbble /></a>
        <a href="https://www.linkedin.com/in/wongchunlong/" target="blank"><FaLinkedin /></a>
        <a href="https://www.twitter.com/desktopofsamuel" target="blank"><FaTwitter /></a>
        </div>
      </div> */}
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
