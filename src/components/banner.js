import React from 'react'
import styled from 'styled-components'
import MajorButton from '../components/majorbutton'

const Background = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 20vh;
    overflow: hidden;
    background-image: linear-gradient(275deg, rgba(89,69,115,1) 0%, rgba(29,6,59,1) 100%);
    background-repeat: no-repeat;
`

const Graphic = styled.div`
    position: absolute;
    top: 0%;
    left: 5%;
    width: 200px;
    height: 200px;
    background-image: url("/static/Gatsby2.svg");
    background-repeat: no-repeat;
    overflow: hidden;
    opacity: .5;
    background-size: contain;
    transform: rotate(15deg);
`

const ContentWrapper = styled.div`
`

const Text = styled.div`
    p {
        letter-spacing: 0px;
        font-weight: 400;
        color: #f5c42d;
        margin-bottom: 0px;
        font-size: 16px;
        line-height: 36px;
    }

    a p {
        letter-spacing: 0px;
        font-weight: 400;
        color: white;
        opacity: 0.5;
        font-size: 14px;
        line-height: 24px;
        text-decoration: underline;
    }
`
const Banner = props => (
 <div>
    <Background>
        <Graphic id="graphic"></Graphic>
        <ContentWrapper className="CenterContainer Padding-XS TextCenter">
            <Text>
                <p>Fun Fact: This website is built using React & Gatsby.JS</p>
                <a href="/why-designers-need-a-personal-website"><p>Read my journey of coding my own design portfolio</p></a>
            </Text>
        </ContentWrapper>
    </Background>

 </div>
)

export default Banner