import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const ButtonWrapper = styled.button`
    background-color: navy;
    padding: 10px 25px;
    border: none;
    margin-bottom: 10vh;
    cursor: pointer;
`

const ButtonText = styled.small`
    font-size: 16px;
    color: #fff;
`

const MajorButton = props => (
    <Link to={props.href}>
        <ButtonWrapper>
            <ButtonText>{props.title}</ButtonText>
        </ButtonWrapper>
   </Link>
)

export default MajorButton