import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'


class NavButton extends Component {
    render() {
        //Get props to SideBar component for Route Link.
        //If link is empty then link will get / for Home
        let path = () => this.props.link === ""? "/" : "/" + this.props.link;
        //To put names same to link
        let firstCharacter = this.props.link.slice(0, 1);
        let restCharacters = this.props.link.slice(1);
        let ButtonName = firstCharacter.toUpperCase() + restCharacters;
        return (
            <StyledButton>
              {/*This Link will get link from arr array which get mapping */}
              <StyledLink to={path()}>
                {/*This is header of link. Default is Home */}
                <StyledHeading>
                  {this.props.link === ""? "Home" : ButtonName}
                </StyledHeading>
              </StyledLink>        
            </StyledButton>
        );
    }
}

export default NavButton;

//after click
//constants under here are for style sheet.
const StyledButton = styled(Button)`
width: 13.5rem;
margin-top: -0.3rem;
background-color: hsla(0, 100%, 0%, 0.8);
border-color: hsla(0, 100%, 0%, 0.8);
`
const StyledLink = styled(Link)`
font-size: 20px;
text-decoration: none;
&:visited {
  color: hsl(0, 100%, 100%);;
}
&:hover {
  color: red;
}
`
const StyledHeading = styled.h6`
text-align: left;
padding-top: 0.5rem;
`