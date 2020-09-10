import React, { Component } from 'react';

import { Main } from '../../Css'

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
      emails:[],
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.deleteEmail = this.deleteEmail.bind(this);
    this.isValid = this.isValid.bind(this);
    this.isEmail = this.isEmail.bind(this);
    this.isInList = this.isInList.bind(this);
    this.coppiedAddress = this.coppiedAddress.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      error: null
    });
  }
  keyDown(event) {
    if(['Enter', ',', 'Tab'].includes(event.key)) {
      event.preventDefault();

      let email = this.state.value.trim();

      if (email && this.isValid(email)) {        
        this.setState({
          emails: [...this.state.emails, email],
          value: ''
        });
      }
    }
  }

  coppiedAddress(event) {
    event.preventDefault();

    let data = event.clipboardData.getData('text');
    let addressArray = data.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)
    let notAddedYet = addressArray.filter(address => this.isInList(address) ? false : true);
    
     this.setState({
       emails: [...this.state.emails, ...notAddedYet],
       value: ''
     })

  }

  deleteEmail(index) {
    this.setState({
      emails: [...this.state.emails.slice(0, index), ...this.state.emails.slice(index + 1)]
    })
  }
  isValid(email) {
    let error = null;

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }
  isEmail(email) {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  isInList(email) {
    return this.state.emails.includes(email);
  }

  render() {        
        return (
            <Main>
              <input value={this.state.value} 
              onChange={this.handleChange} 
              onKeyDown={this.keyDown}
              onPaste={this.coppiedAddress}
              className={'input' + (this.state.error && ' has-error')}></input>
              <br/>{this.state.value}
              <br/>{this.state.emails.map((address, index) => <p key={index}>{address}{index} <span onClick={() => this.deleteEmail(index)}>x</span></p>)}
              <br/>{this.state.test}
              <br/>
              {this.state.error && <p>{this.state.error}</p>}
              {`To: John Doe <john.doe@gmail.com> Cc: Jane Doe <jane.doe@gmail.com>`}
            </Main>
        );
    }
}

export default Test;