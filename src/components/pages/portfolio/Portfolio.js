import React, { Component } from 'react';
import { Main, Texts, Head4 } from '../../../Css'
import styled from 'styled-components'
import info from '../../api/info.config.json'

const lang = localStorage.getItem('NationLang');
const idx = lang === null || parseInt(lang) === 0 ? 0 : 1;

class Portfolio extends Component {
    render() {
        return (
            <Main>
                <Texts>
                <Head4>Portfolios</Head4>
                <a href="https://codepen.io/jacobkim9881/pen/OJPabvL">
		{info.page.portfolio.pfolioAdd1[idx]}
		</a><br />
		- {info.page.portfolio.pfolioAdd1X[idx]}
<br/>
<a href="https://ltmaker.netlify.app">
		{info.page.portfolio.pfolioAdd2[idx]}
		</a><br />
		- {info.page.portfolio.pfolioAdd2X[idx]}
		<br />
                <div>
		    <a href="https://chrome.google.com/webstore/detail/mouse-footprint-tailing/bgmbliffojkhembdalfdgldpeihhpdnm?hl=ko">
		{info.page.portfolio.pfolioAdd3[idx]}
		</a><br/>
		- {info.page.portfolio.pfolioAdd3X[idx]}
	        <br />
		    <a href="https://chrome.google.com/webstore/detail/board-swiper/ioodddoeonpefhnbpmfepmpipldkbcln">
		{info.page.portfolio.pfolioAdd8[idx]}
		</a><br/>
		- {info.page.portfolio.pfolioAdd8X[idx]}
	       <br/>
               <br/>

                    <a href="https://jacobkim9881.github.io/shoppingweb">
		{info.page.portfolio.pfolioAdd4[idx]}
		</a><br/>
                    <a href="https://github.com/jacobkim9881/shoppingweb">
		Git repository
		</a>
                    <p>
                    Frontend <br />
                    - {info.page.portfolio.pfolioAdd4X1[idx]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X2[idx]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X3[idx]}
		<br />
                    Backend <br />
                    - {info.page.portfolio.pfolioAdd4X4[idx]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X5[idx]}
		<br />
                    </p>
                </div>
                <Head4>
		YouTubes
		</Head4>
                    <a href="https://www.youtube.com/playlist?list=PL_xbjJpRyD5Nxsjhvd3enwi69MZ0cGNl_">
		{info.page.portfolio.pfolioAdd5[idx]}
		</a><br />
                    - {info.page.portfolio.pfolioAdd5X[idx]}
		<br />
                    <a href="https://www.youtube.com/watch?v=SUYgcdyObYU">
		{info.page.portfolio.pfolioAdd6[idx]}
		</a><br/>
                    - {info.page.portfolio.pfolioAdd6X[idx]}
		<br />
                    <a href="https://youtu.be/0B4sTW3O6_A">
		{info.page.portfolio.pfolioAdd7[idx]}
		</a><br />
                    - {info.page.portfolio.pfolioAdd7X[idx]}
                    </Texts>
            </Main>
        );
    }
}

export default Portfolio;
