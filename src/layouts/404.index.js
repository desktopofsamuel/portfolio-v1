import React from 'react'
import MajorButton from '../components/majorbutton'
import styled from 'styled-components'
import Header from '../components/header'
import NavBar from '../components/navbar'
import Hero404Logo from '../images/HeroProject.svg'

const Background = styled.section`
    position: absolute;
    display: block;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: url("https://www.nasa.gov/sites/default/files/thumbnails/image/as11-40-5961hr.jpg");
    background-color: rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-blend-mode: overlay;
`

const Content = styled.div`
    position: relative;
    background-color: none;
`

const NotFoundPage = () => (


<div>
    <Background></Background>
    <Content>
        <Header></Header>
        <NavBar></NavBar>
            <section className="">
            <div className="Container Top-XS CenterContainer Hero">
            <img className="clean" src={Hero404Logo} alt="404" width="100px" height="100px"></img>
            <h3 className="TextCenter White Width-70">First man walked on the moon in 1960s. And yet, you have reached a place where no human has ever set foot.</h3>
            <MajorButton textColor="#000" bgColor="#eee" href="/" text={"Back to Home"}></MajorButton>
            </div>
            </section>
    </Content>
    <section className="S-CTA">
    </section>
    
</div>
)

export default NotFoundPage
