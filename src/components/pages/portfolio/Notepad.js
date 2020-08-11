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
               <Link to='/ballsHitting'>BallsHitting</Link><br/>
               <Link to='/gearsmoving'>Gears Moving</Link><br/>
               <Link to='/goldratio'>Gold ratio drawed</Link><br/>
               <Link to='/solarsystem'>Solar System</Link><br/>
               <Link to='/waterpoured'>Water Poured</Link><br/>
            </Main>
        );
    }
}

export default Notepad;