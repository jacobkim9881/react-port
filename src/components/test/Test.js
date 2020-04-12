import React, { Component } from 'react';

import { Main } from '../../Css'
import Blog from '../pages/Blog'

/* const collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
  */

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: 'gmail.com'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {        
        return (
            <Main>
              <input onChange={this.handleChange}></input>
              <br/>
              {this.state.value}
              <br/>
              {Blog.state.blogs.map(post => <p>{post.title}</p>)}
            </Main>
        );
    }
}

export default Test;