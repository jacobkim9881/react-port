import React, { Component } from 'react';

import { Main, Texts, Head4 } from '../../Css'

class About extends Component {
    render() {
        return (
            <Main>
                <Texts>
                <br/><br/>
                <Head4>Who am I?</Head4>
                    프론트앤드 혹은 풀스택 개발자로 전직 준비 중입니다. 코딩부트캠프에서 튜토리얼을 반복하면서 깔끔한 코딩을 익혔습니다. <br/>
                    HTML, CSS, Javascript에 익숙하고 React.JS와 jQuery와 같은 라이브러리도 습득했고 UI에 대한 열정이 있습니다. <br/>
                    항상 새로운 기술을 습득하려고 노력하고 영어 도큐멘터리를 읽는 것은 문제가 없습니다. 다양한 아르바이트 경험과 유통, 영업에 관한 경험을 쌓은 팀플레이어입니다.<br/>
                
                {/*
                Part time job for washing utensils in a hotel at Itaewon(2019.11)<br/>
                Database management with MS Excel in a research company(2019.07 - 2019.08)<br/>
                Taking stocks of clothings, cosmetics in a stock taking company(2019.03 - 2019.05)<br/>
                Sales management in computer distribution industry(2018.01 – 2018.07)<br/>
                Part time job for IT supporting(2017.05 – 2017.12) <br/>
                Security guard at a bank(2016.08 - 2016.10) <br/>
                Part time job for taking stocks(2016.03 - 2016.06) <br/>
                */}
                <a href="https://drive.google.com/file/d/1OuT9RPwgN3LemVK0iZNAf7HDwxfg4fLd/view?usp=sharing">한글 이력서</a><br/>
                <a href="https://drive.google.com/open?id=1ReWE2tDjrsK7KGqWrx42bIQ2euKdo8ih1EkRIfyPFXg">영문 이력서(English Resume)</a><br/>
                <br/>
                <Head4>Posts</Head4>
                <a href="https://dev.to/jacobkim9881/running-node-server-with-mysql-on-my-smartphone-1eb3">안 쓰는 스마트폰에 노드 서버 작동하기(Running node server with mysql on my smartphone)</a><br />
                <a href="https://dev.to/jacobkim9881/hosting-web-server-at-cafe24-getting-a-job-in-korea-f67" >카페24에 MySQL 연동한 node 서버 구동하기(Hosting web server at cafe24(Getting a job in Korea))</a>
                <br/><br/><br/>
                </Texts>
            </Main>
        );
    }
}

export default About;

