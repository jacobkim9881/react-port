import React, { Component } from 'react';
import { Main, Texts, Head4 } from '../../../Css'
import styled from 'styled-components'
import info from '../../api/info.config.json'

class Portfolio extends Component {
    render() {
        return (
            <Main>
                <Texts>
                <Head4>Portfolios</Head4>
                <a href="https://codepen.io/jacobkim9881/pen/OJPabvL">
		{info.page.portfolio.pfolioAdd1[1]}
		</a><br />
		- {info.page.portfolio.pfolioAdd1X[1]}
<br/>
<a href="https://ltmaker.netlify.app">
		{info.page.portfolio.pfolioAdd2[1]}
		</a><br />
		- {info.page.portfolio.pfolioAdd2X[1]}
		<br />
                <div>
		    <a href="https://chrome.google.com/webstore/detail/mouse-footprint-tailing/bgmbliffojkhembdalfdgldpeihhpdnm?hl=ko">
		{info.page.portfolio.pfolioAdd3[1]}
		</a><br/>
		- {info.page.portfolio.pfolioAdd3X[1]}
		<br/>
		<br/>

                    <a href="https://jacobkim9881.github.io/shoppingweb">
		{info.page.portfolio.pfolioAdd4[1]}
		</a><br/>
                    <a href="https://github.com/jacobkim9881/shoppingweb">
		Git repository
		</a>
                    <p>
                    Frontend <br />
                    - {info.page.portfolio.pfolioAdd4X1[1]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X2[1]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X3[1]}
		<br />
                    Backend <br />
                    - {info.page.portfolio.pfolioAdd4X4[1]}
		<br />
                    - {info.page.portfolio.pfolioAdd4X5[1]}
		<br />
                    </p>
                </div>
                <Head4>
		YouTubes
		</Head4>
                    <a href="https://www.youtube.com/playlist?list=PL_xbjJpRyD5Nxsjhvd3enwi69MZ0cGNl_">
		{info.page.portfolio.pfolioAdd5[1]}
		</a><br />
                    - {info.page.portfolio.pfolioAdd5X[1]}
		<br />
                    <a href="https://www.youtube.com/watch?v=SUYgcdyObYU">
		{info.page.portfolio.pfolioAdd6[1]}
		</a><br/>
                    - {info.page.portfolio.pfolioAdd6X[1]}
		<br />
                    <a href="https://youtu.be/0B4sTW3O6_A">
		{info.page.portfolio.pfolioAdd7[1]}
		</a><br />
                    - {info.page.portfolio.pfolioAdd7X[1]}
                    </Texts>
            </Main>
        );
    }
}

export default Portfolio;
