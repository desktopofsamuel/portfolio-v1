import React from 'react'
import MajorButton from '../components/majorbutton'
import Header from '../components/header'
import NavBar from '../components/navbar'

const NotFoundPage = () => (
<div>
    <Header />
    <NavBar></NavBar>
    <div className="CenterContainer Container">
        <img style={{width:'100%'}} src="/static/moon.jpg" />
        <h5>First man walked on the moon in 1960s, but you have reached a place where no human has ever set foot.</h5>
        <MajorButton href="/" title={"Back to Home"}></MajorButton>
    </div>
</div>
)

export default NotFoundPage
