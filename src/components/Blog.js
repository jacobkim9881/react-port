import React, { Component } from 'react';
import axios from 'axios'
import { Main } from '../Css'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'

class Blog extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(res =>
                this.setState({ blogs: res.data })
                );
    }
    render() {
        return (
            <Main>
            <ul>
                {this.state.blogs.map(post =>
                    <Post>
                        <h2>{post.title}</h2>
                        <div><p>{post.body}{post.key}</p></div>    
                    </Post>    
                    )}
            </ul>
            </Main>
        );
    }
}

export default Blog;

const Post = styled.li`
list-style-type: none;
`