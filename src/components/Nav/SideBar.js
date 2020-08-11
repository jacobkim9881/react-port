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
    render() {      
        return (
          <Main>
          <Nav>
          <ButtonGroup>
          <Ul>
            {/*Mapping list array to NavButton component of Routher Link */}
            {arr.map(path => <NavButton link={path} />)}
          </Ul>
          </ButtonGroup> 
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
const Nav = styled.nav`
  top: 2rem; 
  display: block;
  z-index: 1;
  position: fixed; 
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Main = styled.div`
margin: 0 auto;
width: 70%;
`