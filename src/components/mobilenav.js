import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import HeroBlogLogo from '../images/HeroBlog.svg'
import HeroProjectLogo from '../images/HeroProject.svg'
import HeroProfileLogo from '../images/HeroProfile.svg'
import { FaTwitter, FaMedium, FaLinkedin } from 'react-icons/lib/fa';
import './hamburgers.css'

const Section = styled.section`
display: none;

@media (max-width: 700px) {
    position: fixed;
    display: block;
    top: 0px;
    width: 100%;
    z-index: 689;
}
`
const Header = styled.div`
display: block;
position: relative; 
width: 100%;
height: 40px;
background-color: #ffffff;
padding: 5px;
`

const Title = styled.h6`
    float: left;
    padding: 10px;
`

const Icon = styled.div`
    float: right;
`

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Button = styled.button`
    background-color: #F7F7F7;
    border: none;
    padding: 20px;
    cursor: pointer;
    width: 100%;
`
export default class MobileNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    
    closeNavbar() {
        if (this.state.collapsed !== true) {
        this.toggleNavbar();
        }
    }

render () {
    return (
    <Section>
        <Header>
            <Title className="clean">Samuel Wong</Title>
            <Icon>
            <button className="hamburger hamburger--collapse is-active" type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
                </button>
            </Icon>
        </Header>
        <Grid>
        <Link className="clean" to="/blog"><Button><img src={HeroBlogLogo} width="50px"></img><p className="clean">Blog</p></Button></Link>
        <Link className="clean" to="/blog"><Button><img src={HeroProjectLogo} width="50px"></img><p className="clean">Work</p></Button></Link>
        <Link className="clean" to="/blog"><Button><img src={HeroProfileLogo} width="50px"></img><p className="clean">Profile</p></Button></Link>
        <a className="clean" href="https://bookmark.desktopofsamuel.com"><Button><img src={HeroProfileLogo} width="50px"></img><p className="clean">Bookmark</p></Button></a>
        </Grid>

    </Section>
    )}}
