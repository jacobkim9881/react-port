import React, { Component } from 'react';
import { Main } from '../../../Css'

class Portfolio extends Component {
    render() {
        return (
            <Main>
                <h4>Portfolios</h4>
                <a href="https://codepen.io/jacobkim9881/pen/OJPabvL"> Random Famous Ailens' Quotes Maker
</a><br />- API에 있는 격언 중의 하나를 랜덤하게 불러오는 클라이언트 웹페이지입니다.<br/>
<a href="https://ltmaker.netlify.app"> Lotto number maker
</a><br />- 로또 번호를 자동, 반자동, 수동의 방식으로 뽑거나 로또 당첨 번호 통계를 확인할 수 있는 웹사이트입니다.<br />
                <div>
                    <a href="https://jacobkim9881.github.io/shoppingweb">Shopping mall portfolio</a><br/>
                    <a href="https://github.com/jacobkim9881/shoppingweb">Git page is here</a>
                    <p>Functions <br />
                    Frontend <br />
                    - Creating, editing ID by requesting with axios to node.js server<br />
                    - Listing clothes items by mapping from api server<br />
                    - Admin page which you can add or delete clothes items on the list<br />
                    Backend <br />
                    - Get, post put request for user id from frontend page<br />
                    - Excuting queries from get request<br />
                    </p>
                </div>
                <h5>YouTubes</h5>
                    <a href="https://www.youtube.com/watch?v=SUYgcdyObYU">YouTube : Shopping mall</a><br/>
                    - 쇼핑몰에서 제품 판매포스트를 업로드하는 방법 시연 영상 <br />
                    <a href="https://youtu.be/0B4sTW3O6_A">Solar system drawn by canvas of JS</a><br />
                    - 태양계의 행성들이 공전하는 모습을 Javascript canvas로 그려보았습니다.
            </Main>
        );
    }
}

export default Portfolio;