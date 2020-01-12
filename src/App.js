import React, { Component } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './components/Nav/SideBar'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <SideBar />       
      </div>
      </Router>
    );
  }
}

export default App;
