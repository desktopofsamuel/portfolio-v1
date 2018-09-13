import React from 'react';
import styled from 'styled-components';

const SkillGroup = styled.div`
    display: grid;
    grid-template-columns: 16% 33% 48%;

    @media (max-width: 700px) {
        display: block;
    }

`

const SkillLogo = styled.img`
    width: 64px;
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`

const Skill = props => (
    <SkillGroup className="SkillTable">
        <SkillLogo src={props.image}></SkillLogo>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.text}</SkillText>
    </SkillGroup>
)

export default Skill
