import React, { Component } from 'react';
import { Main } from '../Css'
import styled from 'styled-components'

class Skills extends Component {
    render() {
        return (
            <Main>
                OS: Linux Mint <br/>
                IDE: Vs Code <br/>
                Package Manager : npm <br/>
                Framework : React.js <br/>
                How to update this website : Git <br/>
                Deployed at : Netlify <br/>
                React Stack : 
                <Indent>  Axios<br/>
                  styled-component
                </Indent>
            </Main>
        ); 
    }
}

export default Skills;

const Indent = styled.p`
text-indent: 25px;
`