import React, { Component } from 'react';

import styled from 'styled-components'
import { Main } from '../Css'
import { Linkedin, Github, Google, Freecodecamp, Instagram } from '@icons-pack/react-simple-icons'

class Home extends Component {
    render() {
        return (
            <Main>
                <Header>
                    Hi, I am Jacob Kim
                </Header>
                <h2>
                    Softwear Enginner | JavaScript | React.js | HTML | CSS | Git | Npm | English speaker
                </h2>
                <Profiles>
                    <center>
                    <Adress href="https://www.linkedin.com/in/kim-jacob-25baa5179/"><Linkedin color="hsl(0, 100%, 100%)" size={24}/></Adress>
                    <Adress href="https://github.com/jacobkim9881"><Github color="hsl(0, 100%, 100%)" size={24}/></Adress>
                    <Adress href="https://www.freecodecamp.org/jacobkim9881"><Freecodecamp color="hsl(0, 100%, 100%)" size={24}/></Adress>
                    <Adress href="mailto: jacobkim9881@gmail.com"><Google color="hsl(0, 100%, 100%)" size={24}/></Adress>
                    <Adress href="https://www.instagram.com/jacobkim116"><Instagram color="hsl(0, 100%, 100%)" size={24}/></Adress>
                    <Adress href="https://blog.naver.com/kytcoca">Blog</Adress>
                    </center>
                </Profiles>
            </Main>
        );
    }
}

export default Home;
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