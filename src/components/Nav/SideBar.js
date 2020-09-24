import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'
import styled from 'styled-components'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import NavButton from './NavButton'

import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Portfolio from '../pages/portfolio/Portfolio'
import Notepad from '../pages/portfolio/Notepad'
import BallsHitting from '../pages/portfolio/BallsHitting'
import GearsMoving from '../pages/portfolio/gearsMoving'
import Goldratio from '../pages/portfolio/goldratio'
import SolarSystem from '../pages/portfolio/solarSystem'
import WaterPoured from '../pages/portfolio/waterPoured'


import MovieList from '../pages/MovieList'
import UserInfo from '../pages/UserInfo'
import Blog from '../pages/Blog'
import Test from '../test/Test'
import Hidden from '../pages/Hidden'
import Login from '../pages/portfolio/Login'

//List of navigation. You can add lists in this array.
const arr = ["", "about", "skills", "portfolio", "notepad"];

class SideBar extends Component {    
    constructor(props) {        
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
    }
    state = {
        listClicked : false
    }

    handleMenu(e) {        
     if (this.state.listClicked === false) {
         this.setState({listClicked: true});
     } else {
        this.setState({listClicked: false});
     }
     console.log(this.state.listClicked)
    }
    render() {                      
        return (
          <Main>
          <Nav>
          <MobMenuBtn onClick={this.handleMenu}>Menu</MobMenuBtn>
          
          {
          this.state.listClicked ? <StyledBtnGrpMob id="list"> 
          <Ul onClick={this.handleMenu}>
          {/*Mapping list array to NavButton component of Routher Link */}            
          {arr.map(path => <NavButton link={path} />)}
        </Ul>
        </StyledBtnGrpMob> : ''
          }          

        <StyledBtnGrp id="list"> 
          <Ul>
          {/*Mapping list array to NavButton component of Routher Link */}            
          {arr.map(path => <NavButton link={path} />)}
        </Ul>
        </StyledBtnGrp>
        </Nav>

            {/*To add lists you SHOULD add a component in Route after adding list in the array */}
        <Switch>
            <Route path="/portfolio" children={<Portfolio />} />
            <Route path="/solarsystem" children={<SolarSystem />} />
            <Route path="/waterpoured" children={<WaterPoured />} />
            <Route path="/ballsHitting" children={<BallsHitting />} />
            <Route path="/gearsmoving" children={<GearsMoving />} />
            <Route path="/goldratio" children={<Goldratio />} />
            <Route path="/notepad" children={<Notepad />} />
            <Route path="/login">
              <Login />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/skills">
              <Skills />
          </Route>
          <Route path="/movielist">
              <MovieList />
          </Route>
          <Route path="/userinfo">
              <UserInfo />
          </Route>
          <Route path="/blog">
              <Blog />
          </Route>
          <Route path="/test">
              <Test />
          </Route>
          <Route path="/hidden">
              <Hidden />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
        </Main>
        );
    }
}

export default SideBar;

//constants under here are for style sheet.
const StyledBtnGrpMob = styled(ButtonGroup)`    
    display: none;
@media only screen and (max-width: 414px) {    
    width: 100%;
    display: block;
}
`
const StyledBtnGrp = styled(ButtonGroup)`
    margin: 0 auto;
    display: block;
    width: 1080px;
@media only screen and (max-width: 414px) {    
    display: none;
}
`
const MobMenuBtn = styled.span`
    display: none;
@media only screen and (max-width: 414px) {
    cursor: pointer;
    padding: 13px 9px;    
    text-indent: 4px;
    display: block;
}
`
const Nav = styled.nav`
  width: 100%; 
  border-bottom: 1px solid white; 
  background-color: hsla(0, 0%, 0%, 0.7);
  margin: 0 auto;  
  padding-top: 0rem;
  display: block;
  z-index: 1;
  position: relative; 
@media only screen and (max-width: 414px) {
    background-color: hsla(0, 0%, 0%, 0.7);
    border-color: none;
    padding-top: 0;
    width: 100%;
    left: 0;
    position: absolute;
}
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Main = styled.div`
margin: 0 auto;
width: 100%;
`