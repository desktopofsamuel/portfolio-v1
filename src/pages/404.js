import React from 'react'
import MajorButton from '../components/majorbutton'

const NotFoundPage = () => (
  <div className="CenterContainer Container">
    <img style={{width:'100%'}} src="/static/moon.jpg" />
    <h5>Man walked on the moon in the 1960s, but you have reached a place where no human has ever set foot.</h5>
    <MajorButton href="/" text={"Back to Home"}></MajorButton>
  </div>
)

export default NotFoundPage
