//Notepad.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Main, Texts } from '../../../Css'

class Notepad extends Component {
    render() {
        return (
            <Main>
                <Texts>
               <Link to='/ballsHitting'>BallsHitting</Link><br/>
               <Link to='/gearsmoving'>Gears Moving</Link><br/>
               <Link to='/goldratio'>Gold ratio drawed</Link><br/>
               <Link to='/solarsystem'>Solar System</Link><br/>
               <Link to='/waterpoured'>Water Poured</Link><br/>
               </ Texts>
            </Main>
        );
    }
}

export default Notepad;