import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'
import styled from 'styled-components'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import NavButton from './NavButton'

import About from '../About'
import Skills from '../Skills'
import MovieList from '../MovieList'
import UserInfo from '../UserInfo'
import Blog from '../Blog'
import Test from '../Test'


//List of navigation. You can add lists in this array.
const arr = ["", "about", "skills", "movielist", "userinfo", "blog", "test"];

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

            {/*To add lists you should add a component in Route after adding list in the array */}
        <Switch>
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