import React, { Component } from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom'
import styled from 'styled-components'

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
          <Ul>
            <li>
              <StyledLink to="/">Home</StyledLink>        
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/skills">Skills</StyledLink>
            </li>
            <li>
              <StyledLink to="/list">Movie Lists</StyledLink>
            </li>
            <li>
              <StyledLink to="/users">User Information</StyledLink>
            </li>
            <li>
              <StyledLink to="/blog">Blogs</StyledLink>
            </li>
            <li>
              <StyledLink to="/test">Test</StyledLink>
            </li>
          </Ul>
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

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Nav = styled.nav`
  width: 20%;
  display: block;
  background-color: hsl(201, 36%, 50%);
  position: fixed;
`
const StyledLink = styled(Link)`
font-size: 20px;
text-decoration: none;
&:visited {
  color: black;
}
&:hover {
  color: red;
}
`

export default SideBar;