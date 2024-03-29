import React, { Component } from 'react';
import { Main, Texts, Head5 } from '../../Css'
import styled from 'styled-components'

class Skills extends Component {
    render() {
        return (
            <StyledMain>
                <TextsForSkills>
                <Card2>
                <Head5>Main Stacks </Head5>                
                HTML<br/> 
                CSS<br/>                 
                Javascript<br/> 
		ES6<br/>
                React.JS <br/> 
                Node.JS <br/> 
                express.JS<br/> 
                MySQL<br/>
                PostgreSQL<br/>
                </Card2>
                <Card1>
                    <Head5>Development Environment</Head5>                
                OS: Linux Mint <br/>
                IDE: Vs Code, Vim <br/>
                <br/>
                <br/>
                <br/>
                </Card1>
                <Card1>
                <Head5>I also can do...</Head5>
                Java<br/> 
                JSP<br/> 
                jQuery<br/> 
                Eclipse<br/> 
                ETC : Chrome Extensions, Google Apps Script, Electron.JS, AWS Lambda <br/>
                </Card1>
                </TextsForSkills>
            </StyledMain>
        ); 
    }
}

export default Skills;

const StyledMain = styled(Main)`
    background-color: hsla(0,100%,0%,0);
`
const Card1 = styled.div`
    background-color: hsla(0,100%,0%,0.7);
    width: 48%;
    display: inline-block;
    border-radius: 0;
    padding: 30px;
    margin: 1%;
@media only screen and (max-width: 415px) {
    width: 98%;
}
`
const Card2 = styled.div`
    background-color: hsla(0,100%,0%,0.7);
    width: 98%;
    display: inline-block;
    border-radius: 0;
    padding: 30px;
    margin: 1%;
    margin-top: 0;
`
const TextsForSkills = styled(Texts)`
padding: 0;
`
