import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-color: white;
display: block;
padding: 30px;

&:hover {
}
`

const Icon = styled.img`
width: 75px;
`

const Title = styled.h3`
font-size: 20px;
`

const Content = styled.p`
font-size: 16px;
line-height: 170%;
color: #B5B5B5;
`


const Card = props => (
    <Wrapper>
        <Icon src={props.icon}>
        </Icon>
        <Title>{props.title}
        </Title>
        <Content>{props.content}
        </Content>
    </Wrapper>

)

export default Card