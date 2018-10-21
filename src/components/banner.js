import React from 'react'
import styled from 'styled-components'
import MajorButton from './majorbutton'

const Background = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 20vh;
    min-height: 200px;
    overflow: hidden;
    background-image: linear-gradient(275deg, rgba(89,69,115,1) 0%, rgba(29,6,59,1) 100%);
    background-repeat: no-repeat;
`

const Graphic = styled.div`


    @media (max-width: 700px) {
        z-index: 0;
        top: 10%;
        opacity: .3;
    }
`

const ContentWrapper = styled.div`
`

const Text = styled.div`

    z-index: 1; 

    p {
        letter-spacing: 0px;
        color: #f5c42d;
        margin-bottom: 0px;
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

    @media (max-width: 700px) {
        
        p {
            opacity: 1;
        }
        
        a p {
            opacity: 1;
        }
    }

`
const Banner = props => (
 <div>
    <Background>
        <Graphic id="graphic"></Graphic>
        <div className="Container Height-1000">
            <ContentWrapper className="CenterContainer Padding-XS TextCenter">
                <Text>
                    <img className="NoMargin" src="/static/Gatsby2.svg" width="80px"></img>
                    <p>Fun Fact: This website is built using React & Gatsby.JS</p>
                    <a href="/why-designers-need-a-personal-website"><p>How I code my own design portfolio</p></a>
                </Text>
            </ContentWrapper>
        </div>
    </Background>

 </div>
)

export default Banner