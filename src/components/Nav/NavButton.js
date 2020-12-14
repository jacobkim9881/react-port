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
              /*This Link will get link from arr array which get mapping */
              <StyledLink to={path()} tabindex={0}>
                <StyledButton tabindex={-1} >
                {/*This is header of link. Default is Home */}
                  <StyledHeading>
                    {this.props.link === ""? "Home" : ButtonName}
                  </StyledHeading>
       	        </StyledButton>
              </StyledLink>        
        );
    }
}

export default NavButton;

//after click
//constants under here are for style sheet.
const StyledButton = styled(Button)`
width: 13.5rem;
background-color: hsla(0, 100%, 0%, 0);
border-color: hsla(0, 100%, 100%, 0);
border-radius: 0px;

&:hover {
  background-color: hsla(0, 100%, 100%, 0.7);
  border-color: hsla(0, 100%, 100%, 0.7);
}

@media only screen and (max-width: 414px) {
  width: 100%;
  margin-top: none;
background-color: none;
  border-color: none;
}
`
const StyledLink = styled(Link)`
font-size: 20px;
text-decoration: none;
&:link {
  color: hsl(0, 100%, 100%);
}
&:visited {
  color: hsl(0, 100%, 100%);
}
&:hover {
  color: red;
}
`
const StyledHeading = styled.h6`
text-align: left;
padding-top: 0.5rem;
`
