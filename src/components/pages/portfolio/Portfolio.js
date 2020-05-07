import React, { Component } from 'react';
import { Main } from '../../../Css'

class Portfolio extends Component {
    render() {
        return (
            <Main>
                <h4>Portfolios</h4>
                <a href="https://codepen.io/jacobkim9881/pen/OJPabvL"> Random Famous Ailens' Quotes Maker
</a><br /><br />
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
            </Main>
        );
    }
}

export default Portfolio;