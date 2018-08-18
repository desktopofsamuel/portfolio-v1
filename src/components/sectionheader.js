import React from 'react'
import styled from 'styled-components'

const SectionHeader = styled.div`
    display: block;
`
const SectionLogo = styled.img``
const SectionTitle = styled.h3`
    color: ${props => props.color};
`

const Section = props => (
    <SectionHeader>
        <SectionLogo src={props.logo} ></SectionLogo>
        <SectionTitle>
            {props.title}
        </SectionTitle> 
    </SectionHeader>

)

export default Section