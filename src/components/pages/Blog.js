import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Main } from '../../Css'

class Blog extends Component {
    state = {
        blogs: [],
        users: [],
        total: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res =>
                this.setState({ blogs: res.data })
                );
        
         axios.get("https://jsonplaceholder.typicode.com/users")
           .then(res =>
               this.setState({ users: res.data })
               );
         for (let i = 0; i < this.state.blogs.length; i++) {
          this.setState({
            total: this.state.total.push(Object.assign(this.state.blogs[i], this.state.users[i%20]))
          });        
        }
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
                        <StyledCardBody>{post.body}</StyledCardBody>
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
const StyledCardBody = styled(Card.Body)`
color: hsl(0, 100%, 0%);
`