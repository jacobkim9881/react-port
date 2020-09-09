//Notepad.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Main, Texts } from '../../../Css'

class Notepad extends Component {
    render() {
        return (
            <Main>
                <Texts><br/><br/>
               <Link to='/ballsHitting'>BallsHitting</Link><br/>
               <Link to='/gearsmoving'>Gears Moving</Link>
               <br/><br/>
               </Texts>
            </Main>
        );
    }
}

export default Notepad;