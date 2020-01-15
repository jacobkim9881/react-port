import React, { Component } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

import SideBar from './components/Nav/SideBar'

class App extends Component {
  render() {
    return (
      <Router>
      <Background>
        <SideBar />       
      </Background>
      </Router>
    );
  }
}

export default App;

const Background = styled.div`
`