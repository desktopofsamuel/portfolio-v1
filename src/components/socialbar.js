import React from 'react'
import './socialbar.css'
import { FaInstagram, FaBehance, FaMedium, FaTwitter, FaLinkedin, FaArrowRight } from 'react-icons/lib/fa';

const Socialbar = () => (
<section className="S-SocialBar">
    <div className="Container50 Padding-S">
      <div>
        <div className="SocialBarWrapper">
          <a href="http://www.instagram.com/desktopofsamuel"><FaInstagram className="BrandIcon"/></a>
          <a href="http://www.twitter.com/desktopofsamuel"><FaTwitter className="BrandIcon"/></a>
          <a><FaLinkedin className="BrandIcon"/></a>
          <a><FaMedium className="BrandIcon"/></a>
          <a><FaBehance className="BrandIcon"/></a>
        </div>
        <div className="TextCenter FooterWrapper WhiteText">
            <p>Design with <u>Figma</u>, Developed with <u>Gatsby</u>.  Read the story <FaArrowRight /></p>
        </div>
      </div>
    </div>
</section>
)

export default Socialbar 