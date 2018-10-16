import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const ButtonWrapper = styled.button`
    background-color: navy;
    padding: 10px 25px;
    border: none;
    margin-bottom: 10vh;
    cursor: pointer;
    transition: background-color ease-in-out 0.2s;

    &:hover {
        background-color: blueviolet;
    }
`

const ButtonText = styled.small`
    font-size: 16px;
    color: #fff;
    text-decoration: none;
`

const MajorButton = props => (
    <a href={props.href}>
        <ButtonWrapper>
            <ButtonText>{props.title}</ButtonText>
        </ButtonWrapper>
   </a>
)

export default MajorButton