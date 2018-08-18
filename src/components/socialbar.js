import React from 'react'
import './socialbar.css'
import { FaInstagram, FaBehance, FaMedium, FaTwitter, FaLinkedin, FaArrowRight } from 'react-icons/fa'

const Socialbar = () => (
<section className="S-SocialBar">
    <div className="Container50">
      <div className="SocialBarWrapper Padding-S">
      <a href="http://www.instagram.com/desktopofsamuel"><FaInstagram className="BrandBar"/></a>
      <a href="http://www.twitter.com/desktopofsamuel"><FaTwitter className="BrandBar"/></a>
      <a><FaLinkedin className="BrandBar"/></a>
      <a><FaMedium className="BrandBar"/></a>
      <a><FaBehance className="BrandBar"/></a>
      </div>
    </div>
</section>
)

export default Socialbar 