import React, { Component } from 'react';
import axios from 'axios'
import { Main } from '../Css'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Blog extends Component {
    state = {
        blogs: [],
        users: []
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(res =>
                this.setState({ blogs: res.data })
                );
        
         axios.get("http://jsonplaceholder.typicode.com/users")
           .then(res =>
               this.setState({ users: res.data })
               );
    }
    render() {      
        return (
            <Main>
            <Accordion>
                {this.state.blogs.map(post =>
                  <StyledCard border="dark">
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="light" eventKey={post.id}>
                          <StyledH3>{post.title} </StyledH3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={post.id}>
                        <Card.Body>{post.body}</Card.Body>
                      </Accordion.Collapse>
                    </StyledCard>
                )}
            </Accordion>
            </Main>
        );
    }
}

export default Blog;

const StyledCard = styled(Card)`
width: 40rem;
margin: 0 auto;
`
const StyledH3 = styled.h3`
text-align: left;
font-family: bookman;
`