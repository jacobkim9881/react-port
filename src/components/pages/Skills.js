import React, { Component } from 'react';
import { Main, Texts, Head5 } from '../../Css'
import styled from 'styled-components'

class Skills extends Component {
    render() {
        return (
            <StyledMain>
                <Texts>
                <Card2>
                <Head5>Main Stacks </Head5>                
                React :<br/> 
                    -Axios<br/>   
                    -styled-component<br/>    
                    -React-route<br/> 
                HTML<br/> 
                CSS<br/>                 
                Javascript<br/> 
                Node.js :<br/> 
                    - express<br/> 
                        * session <br/>
                        * router <br/>                 
                        * express-generator<br/>                         
                    - mysql<br/>                     
                    - cors<br/> 
                    - sequelize<br/>
                    - helmet <br/>                        
                MySQL<br/>
                </Card2>
                <Card1>
                    <Head5>Development Environment</Head5>                
                OS: Linux Mint <br/>
                IDE: Vs Code <br/>
                Package Manager : npm <br/>                
                How to update this website : Git <br/>
                Deployed at : Netlify <br/>
                <br/>
                <br/>
                </Card1>
                <Card1>
                <Head5>I also can do...</Head5>
                Vim<br/> 
                Java<br/> 
                JSP<br/> 
                jQuery<br/> 
                Eclipse<br/> 
                Excutable on OS : ElectronJS<br/>
                ETC : Chrome Extensions <br/>
                </Card1>
                </Texts>
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
`
