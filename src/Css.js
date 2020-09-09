import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    top: 100px;
    margin: 0 auto;
    background-color: hsla(0, 100%, 0%, 0.5);
    width: 1080px;
    text-indent: 50px;
@media only screen and (max-width: 415px) {
    width: 90%;
    position: absolute;
    top: 60px;
    left: 5%;    
}
`

export const Texts = styled.div `
margin: 50px;
text-indent: 0px;
`