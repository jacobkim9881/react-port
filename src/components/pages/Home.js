import React from 'react';
import styled from 'styled-components'

import { Linkedin, Github, Google, Freecodecamp, Instagram, Twitter } from '@icons-pack/react-simple-icons'

import { Main } from '../../Css'
import info from '../api/info.config.json'

export default function Home() {   
    return (
        <Main><br/><br/>
            <Header>
            Hello, <br/>I am <br/> Jacob Kim
            </Header>
            <Tag>
                Softwear Enginner | JavaScript | React.js | <br/>
                    HTML | CSS | Git | Npm | English speaker
            </Tag>
            <Profiles>
                <center>
                <Adress tabindex={1} href={info.Linkedin}><Linkedin color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Github}><Github color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.FreeCodeCamp}><Freecodecamp color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Email}><Google color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Instagram}><Instagram color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Twitter}><Twitter color="hsl(0, 100%, 100%)" size={24}/></Adress>
                <Adress href={info.Etc}>Blog</Adress>
                </center>
            </Profiles>
            <br/><br/>
        </Main>
    );
}
const Header = styled.h1`
font-size: 8rem;
text-align: center;
@media only screen and (max-width: 414px) {
    font-size: 3rem;
    text-indent: 0px;
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
display: inline-block;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 1rem;
color: hsl(0, 100%, 100%);
`
const Tag = styled.h2`
margin: 50px;
text-align: center;
text-indent: 0px;
@media only screen and (max-width: 414px) {    
    font-size: 1rem;
}
`
