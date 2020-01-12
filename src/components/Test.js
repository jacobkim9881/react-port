import React, { Component } from 'react';
import { Main } from '../Css'
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            answer: false
        }
        this.getText = this.getText.bind(this);
    }

    getText() {
        this.setState({
            input: event.target.value
        });
    }

    getAnswer() {
        let str = this.state.input;
        let letters = str.match(/[a-z0-9]/gi)
        //An array to a string
        .join("")  
        .toLowerCase();
              
        //i start from 0 and j start from end 
        for (let i = 0; i < letters.length; i++) {
          for (let j = letters.length - 1; j >= 0; j--) {
            //If i and j get to middle and then return true
            //i, j should search till middle and
            if (i != j && i < j) {
              //If both characters are same then increase i
              if (letters[i] == letters[j]) {
                i++;
              } else {
              //Else return false
                this.setState(state => ({
                    answer: false
                }));
              }
            } else {
                this.setState(state => ({
                    answer: true
                }));
            }
          }
        }
    }
    render() {
        return (
            <Main>
              <input type="text" onChange={this.getText}></input>
              <button type="button" onClick={this.getAnswer}>click me</button>
              {this.state.input}
              {this.state.answer}  
            </Main>
        );
    }
}

export default Test;