import React, { Component } from 'react';

import { Main, Texts, Head4 } from '../../Css'
import info from '../api/info.config.json'

const lang = localStorage.getItem('NationLang');
const idx = lang === null || parseInt(lang) === 0 ? 0 : 1;

class About extends Component {
    render() {
        return (
            <Main>
                <Texts>
        <Head4>{info.page.about.head[idx]}</Head4>
                    {info.page.about.body[idx]}
                <br/>
                {/*
                Part time job for washing utensils in a hotel at Itaewon(2019.11)<br/>
                Database management with MS Excel in a research company(2019.07 - 2019.08)<br/>
                Taking stocks of clothings, cosmetics in a stock taking company(2019.03 - 2019.05)<br/>
                Sales management in computer distribution industry(2018.01 – 2018.07)<br/>
                Part time job for IT supporting(2017.05 – 2017.12) <br/>
                Security guard at a bank(2016.08 - 2016.10) <br/>
                Part time job for taking stocks(2016.03 - 2016.06) <br/>
                */}
                <a href={info.page.about.resumeKUrl}>{info.page.about.resumeK[idx]}</a><br/>
            <a href={info.page.about.resumeUrl}>{info.page.about.resumeE[idx]}</a><br/>
                <br/>
            <Head4>{info.page.about.posts[idx]}</Head4>
            <a href="https://dev.to/jacobkim9881/running-node-server-with-mysql-on-my-smartphone-1eb3">{info.page.about.postAdd1[idx]}</a><br />
            <a href="https://dev.to/jacobkim9881/hosting-web-server-at-cafe24-getting-a-job-in-korea-f67" >{info.page.about.postAdd2[idx]}</a> <br/>               
            <a href="https://github.com/jacobkim9881/myexetensiontutorial" >{info.page.about.postAdd3[idx]}</a> <br/>               
            <a href="https://github.com/jacobkim9881/shoppingweb" >{info.page.about.postAdd4[idx]}</a>                
 
                </Texts>
            </Main>
        );
    }
}

export default About;

