import React, { Component } from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom'
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import About from '../About'
import Skills from '../Skills'
import MovieList from '../MovieList'
import UserInfo from '../UserInfo'
import Blog from '../Blog'
import Test from '../Test'

class SideBar extends Component {
    render() {
        return (
          <div>
          <Nav>
          <ButtonGroup>
          <Ul>
            <StyledButton>
              <StyledLink to="/"><StyledHeading>Home</StyledHeading></StyledLink>        
            </StyledButton>
            <StyledButton>
              <StyledLink to="/about"><StyledHeading>About</StyledHeading></StyledLink>
            </StyledButton>
            <StyledButton>
              <StyledLink to="/skills"><StyledHeading>Skills</StyledHeading></StyledLink>
            </StyledButton>
            <StyledButton>
              <StyledLink to="/list"><StyledHeading>Movie Lists</StyledHeading></StyledLink>
            </StyledButton>
            <StyledButton>
              <StyledLink to="/users"><StyledHeading>User Information</StyledHeading></StyledLink>
            </StyledButton>
            <StyledButton>
              <StyledLink to="/blog"><StyledHeading>Blogs</StyledHeading></StyledLink>
            </StyledButton>
            <StyledButton>
              <StyledLink to="/test"><StyledHeading>Test</StyledHeading></StyledLink>
            </StyledButton>
          </Ul>
          </ButtonGroup> 
        </Nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/list">
            <MovieList />
          </Route>
          <Route path="/users">
            <UserInfo />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
        </div>
        );
    }
}

export default SideBar;

const Nav = styled.nav`
  top: 2rem;  
  left: 18rem;
  display: block;
  z-index: 1;
  position: fixed;    
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const StyledButton = styled(Button)`
width: 13rem;
margin-top: -0.3rem;
background-color: hsla(0, 100%, 0%, 0.8);
border-color: hsla(0, 100%, 0%, 0.8);
`
const StyledLink = styled(Link)`
font-size: 20px;
text-decoration: none;
&:visited {
  color: hsl(0, 100%, 100%);;
}
&:hover {
  color: red;
}
`
const StyledHeading = styled.h6`
text-align: left;
padding-top: 0.5rem;
`