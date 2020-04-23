import React from 'react';
import styled from 'styled-components'

import { Linkedin, Github, Google, Freecodecamp, Instagram } from '@icons-pack/react-simple-icons'

import { Main } from '../../Css'
import info from '../api/info.config.json'

export default function Home() {   
    return (
        <Main>
            <Header>
            Hi, I am Jacob Kim
            </Header>
            <Tag>
                Softwear Enginner | JavaScript | React.js | HTML | CSS | Git | Npm | English speaker
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
        </Main>
    );
}

const Header = styled.h1`
font-size: 8rem;
text-align: center;
`
const Profiles = styled.div`
display: block;
width: 30%;
margin: 0 auto;
`
const Adress = styled.a`
padding-left: 1rem;
padding-right: 1rem;
color: hsl(0, 100%, 100%);
`
const Tag = styled.h2`

`