import React from 'react';
import styled from 'styled-components';

const PortfolioGroup = styled.div`
    background: url(${props => props.image});
    background-size: cover;
`

const PortfolioTitleGroup = styled.div`
`

const PortfolioTitle = styled.h2`
`

const PortfolioText = styled.p`
`

const PortfolioIndex = props => (
    <PortfolioGroup image={props.image}>
        <PortfolioTitleGroup>
            <PortfolioTitle>
                {props.title}
            </PortfolioTitle>
            <PortfolioText>
                {props.text}
            </PortfolioText>
        </PortfolioTitleGroup>
    </PortfolioGroup>
)

export default PortfolioIndex