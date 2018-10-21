import React from 'react'
import styled from 'styled-components'
import MajorButton from '../components/majorbutton-a'
import { FaMedium, FaDribbble, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/lib/fa'
import { Zoom, Slide, Fade } from 'react-reveal'

const CTA = styled.section`
    position: relative;
    margin-bottom: -50px;
    background-color: #f7f7f7;
`


const Content = styled.p`

`

const PropicWrapper = styled.div`
position: relative;
display: block;
box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.025);
`

const Propic = styled.div`
background-image: url("/static/Profile.jpg");
background-position: left bottom;
background-size: cover;
background-repeat: no-repeat;

`
const NametagWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-auto-rows: 200px auto;
    }
`

const Nametag = styled.div`
position: relative;
display: block;
height: auto;
padding: 36px;
background-color: #ffffff;

@media (max-width: 700px) {
    padding: 18px;
}
`

const Social = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
width: 50%;
cursor: pointer;

a {
    color: #797979;
}

a:hover {
    color: #292929;
}

`

const Footer = () => (
    <div id="footer">
    <CTA>
        <Zoom><div className="Container Padding-M">
        <PropicWrapper>
        
        <NametagWrapper>
        <Propic />
        <Nametag>
            <h6>Let's Keep In Touch</h6>
            <Content>If you have any projects, I'm interested in freelance projects or remote work.</Content>
            <Content>Feel free to ping me about design & technology or let's grab coffee if you are in town. </Content>
            <MajorButton href="mailto:desktopofsamuel@gmail.com" text="Let's Chat" bgColor="#3284DC"></MajorButton>
            <Social>
                <a href="https://dribbble.com/desktopofsamuel" target="blank"><FaDribbble /></a>
                <a href="https://www.linkedin.com/in/wongchunlong/" target="blank"><FaLinkedin /></a>
                <a href="https://www.twitter.com/desktopofsamuel" target="blank"><FaTwitter /></a>
                <a href="https://medium.com/@desktopofsamuel" target="blank"><FaMedium /></a>
                <a href="mailto:desktopofsamuel@gmail.com" target="blank"><FaEnvelope /></a>
            </Social>
        </Nametag>
        </NametagWrapper>
        </PropicWrapper>
        </div></Zoom>
    </CTA>
        <section className="S-Footer">
            <div className="Container TextCenter Padding-XS">
            <div className="FooterWrapper WhiteText">
                <small>©2018 Samuel Wong — Made in Hong Kong</small>
            </div>
            </div>
        </section>
    </div>
    )

export default Footer