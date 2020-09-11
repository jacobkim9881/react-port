import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    top: 0px;    
    margin: 30px auto;
    background-color: hsla(0, 100%, 0%, 0.5);
    width: 1080px;
    text-indent: 50px;
@media only screen and (max-width: 415px) {
    width: 90%;
    position: absolute;
    margin: 0 auto;
    top: 60px;
    left: 5%;    
}
`

export const Texts = styled.div `
margin: 30px;
text-indent: 0px;
`

export const Head4 = styled.h4`
width: 100%;
padding-bottom: 5px;
border-bottom: 1px solid white;
`