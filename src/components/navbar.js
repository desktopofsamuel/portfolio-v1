import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import Link from 'gatsby-link';
import HeroProjectLogo from '../images/HeroProject.svg'
import HeroProfileLogo from '../images/HeroProfile.svg'
import HeroContactLogo from '../images/HeroContact.svg'
import HeroBlogLogo from '../images/HeroBlog.svg'
import './hamburgers.css'

const Wrapper = styled.section`
display: none;

@media (max-width: 700px) {
    position: relative;
    display: block;
    top: 0px;
    width: 100%;
    z-index: 689;
    
    a:hover {
      padding-bottom: 0;
    }
}
`;

const Header = styled.div`
position: relative; 
width: 100%;
height: 40px;
background-color: #ffffff;
display: flex;
flex-direction: horizontal;
justify-content: space-between;
align-items: center;
`

const Title = styled.h6`
`

const Icon = styled.div`
    cursor: pointer;
`
const Grid = styled.div`
    width: 100%;
    display: none;
    grid-template-columns: 1fr 1fr;
    transition: 500ms ease-in-out;
    visibility: hidden;
    grid-gap: 0.5px;
`

const Button = styled.button`
    background-color: #F7F7F7;
    border: none;
    padding: 20px;
    cursor: pointer;
    width: 100%;
`

const NavLogo = styled.img`
  width: 50px;
  margin-bottom: 0;
`

const Menu = styled.div`
  
/* This is where the onClick Trigger would perform */
  &.active #Mobile {
    display: grid;
    visibility: visible;
    animation-name: dropin;
    animation-duration: 500ms;
    transition: 500ms ease-in-out;
    box-shadow: 0px 10px 42px -26px rgba(0,0,0,0.55);

   @keyframes dropin {
      from { transform: translate(0, -10px)};
      to { transform: translate(0, 0px)};
    }
  }
`;

class NavBar extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const menuClass = classNames({
      menu: true,
      active: this.state.isActive
    });

    return (
      <Wrapper id="Navbar">
         
        <Menu id="nav-toggle" className={menuClass} onClick={this.handleClick}>
        <Header className="Container">
            <Title className="clean">Samuel Wong</Title>
            <Icon className={menuClass}>
            <button className={`hamburger hamburger--collapse ${menuClass}`}  type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
                </button>
            </Icon>
        </Header>
        <Grid id="Mobile">
          <Link className="borderright bordertop" to="/"><Button><NavLogo src={HeroProfileLogo}></NavLogo><p className="clean">Profile</p></Button></Link>
          <Link className="bordertop" to="/work"><Button><NavLogo src={HeroProjectLogo}></NavLogo><p className="clean">Work</p></Button></Link>
          <Link className="borderright" to="/blog"><Button><NavLogo src={HeroBlogLogo}></NavLogo><p className="clean">Blog</p></Button></Link>
          <Link className="" to="/blog"><Button><NavLogo src={HeroContactLogo}></NavLogo><p className="clean">Social</p></Button></Link>
          </Grid>
        </Menu>
        
        
      </Wrapper>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.node
};

NavBar.defaultProps = {
  children: null
};

export default NavBar;