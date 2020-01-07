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

class SideBar extends Component {
    render() {
        return (
          <div>
          <Nav>
          <Ul>
            <li>
              <Link to="/">Home</Link>        
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/list">Movie Lists</Link>
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

export default SideBar;