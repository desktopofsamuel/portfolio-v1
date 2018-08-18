import React from 'react'
import { FaArrowRight } from 'react-icons/lib/fa';
import './footer.css'

const Footer = () => (
    <section className="S-Footer">
        <div className="Container TextCenter Padding-XS">
      <div className="FooterWrapper WhiteText">
          <p>Design with <u>Figma</u>, Developed with <u>Gatsby</u>.  Read the story <FaArrowRight /></p>
          <small>©2018 Samuel Wong — Made in Hong Kong</small>
      </div>
        </div>
    </section>
    )

export default Footer