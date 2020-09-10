import React from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

import SideBar from './components/Nav/SideBar'

export default function App() {  
  return (
    <Router>
    <Background>
      <SideBar />       
    </Background>
    </Router>
  );
}

const Background = styled.div`
`