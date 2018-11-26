import React, { Component } from "react";
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.div`
`

const Icon = styled.img`
height: 2em;
width: 2em;
`
const Title = styled.h3`
color: #ff0000;
`

const NavButton = props => (
    <Link to={props.to}>
        <Button>
            <Icon src={props.icon} />
            <Title>{props.title}</Title>
        </Button>
    </Link>
)


export default NavButton;