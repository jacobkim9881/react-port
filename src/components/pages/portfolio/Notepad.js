//Notepad.js
import React, { Component } from 'react';
import { Link,
    Switch,
    Route } from 'react-router-dom'
import { Main } from '../../../Css'

class Notepad extends Component {
    render() {
        return (
            <Main>
               <Link to='/ballsHitting'>BallsHitting</Link>
            </Main>
        );
    }
}

export default Notepad;