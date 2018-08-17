import React from 'react'
import animationData from './animation.json'
import lottie from 'lottie-web'

class SecondPage extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    })
  }

  render() {
    return <div id="lottie">hi</div>
  }
}

export default SecondPage