import React from 'react';
import styled from 'styled-components'

import { Linkedin, Github, Google, Freecodecamp, Instagram } from '@icons-pack/react-simple-icons'

import { Main } from '../../Css'
import info from '../api/info.config.json'
import HbgBt from '../utilities/hambgButton'

export default function Home() {   
    return (
        <Main><br/><br/>
            <Header>
            {
                //<HbgBt />
            }
            Hello, <br/>I am <br/> Jacob Kim
            </Header>
            <Tag>
                Softwear Enginner | JavaScript | React.js | <br/>
                    HTML | CSS | Git | Npm | English speaker
            </Tag>
            <Profiles>
                <center>
                <Adress href={info.Linkedin}><Linkedin color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Github}><Github color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Freecodecamp}><Freecodecamp color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Email}><Google color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Instagram}><Instagram color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Etc}>Blog</Adress>
                </center>
            </Profiles>
            <br/><br/>
        </Main>
    );
}
//size
const Header = styled.h1`
font-size: 8rem;
text-align: center;
@media only screen and (max-width: 414px) {
    font-size: 3rem;
}
`

const Profiles = styled.div`
    display: block;
    width: 25rem;
    margin: 0 auto;
    text-indent: 0px;
@media only screen and (max-width: 414px) {
    width: 12rem;    
}
`
const Adress = styled.a`
padding-left: 1rem;
padding-right: 1rem;
color: hsl(0, 100%, 100%);
`
//size
const Tag = styled.h2`
margin: 50px;
text-align: center;
text-indent: 0px;
@media only screen and (max-width: 414px) {    
    font-size: 1rem;
}
`