import React, { Component } from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

class Nation extends Component {
 constructor(props) {
 super(props)	 
 this.changeLang = this.changeLang.bind(this);
 }
 componentDidMount() {
 let lang =  localStorage.getItem("NationLang");
 let engLan = document.getElementById('eng-lan');	 
 let korLan = document.getElementById('kor-lan');	 
 let curLang = lang === null || parseInt(lang) === 0 ? 0 : 1;
 engLan.style.backgroundColor = 'hsla(0, 100%, 100%, 0)'; 
 korLan.style.backgroundColor = 'hsla(0, 100%, 100%, 0)';
 curLang === 0 ? engLan.style.backgroundColor = 'hsla(0, 100%, 100%, 0.7)' : korLan.style.backgroundColor = 'hsla(0, 100%, 100%, 0.7)';		 
 }

 changeLang(e) {
 let engLan = document.getElementById('eng-lan');	 
 let korLan = document.getElementById('kor-lan');	 
 let langName = e.target.innerHTML;	
 langName === 'KOR' ? localStorage.setItem('NationLang', 1): localStorage.setItem('NationLang', 0);	
 document.location.reload();
 }

    render() {
        return (
		<span>
       		<LeftButton id='kor-lan' onClick={this.changeLang}>
		KOR     
		</LeftButton>
		<RightButton id='eng-lan' onClick={this.changeLang}>
		ENG
		</RightButton>
		</span>
	);
    }
}

export default Nation;

const StyledLi = styled.li`
display: inline-block;
`
const LeftButton = styled(Button)`
font-size: 1rem;
padding: 1px;
width: 2.2rem;
background-color: hsla(0, 100%, 0%, 0);
border: 0px solid white;
border-radius: 30% 0% 0% 30%;

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

const RightButton = styled(Button)`
font-size: 1rem;
padding: 1px;
width: 2.2rem;
background-color: hsla(0, 100%, 0%, 0);
border: 0px solid white;
border-radius: 0% 30% 30% 0%;

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

const StyledHeading = styled.h6`
text-align: left;
padding-top: 0.5rem;
`
