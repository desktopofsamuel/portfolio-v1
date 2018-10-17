import React from 'react'
import styled from 'styled-components'

const CTA = styled.section`
    position: relative;
    margin-bottom: -50px;
    text-align: center;
    background-color: #f7f7f7;
`

const Title = styled.h1`

    font-weight: 600;
`

const Content = styled.p`

`

const Footer = () => (
    <div id="#footer">
    <CTA>
        <div className="CenterContainer Padding-S">
        <img style={{width:'90px',height:'90px'}} src="/static/propic.png" />
        <Title>Let's Keep In Touch</Title>
        <div className="">
        <Content>I'm interested in freelance projects and remote work, or feel free to ping me about design & technology. </Content>
        <Content><a href="mailto:desktopofsamuel@gmail.com">desktopofsamuel@gmail.com</a></Content>
        </div>
        </div>
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