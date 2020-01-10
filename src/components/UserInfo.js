import React, { Component } from 'react';
import styled from 'styled-components'
import { Main } from '../Css'

import axios from 'axios'
const API_URL = 'http://jsonplaceholder.typicode.com';

class UserInfo extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        const url = `${API_URL}/users/`
        axios.get(url)
            .then(res => {
                const persons = res.data;
                this.setState({ persons })
            })
    }

    render() {
        return (
            <Table>
                 {this.state.persons.map(person =>
                    <div>
                    <tr>
                        <TdFirst>Name: </TdFirst>
                        <TdSecond>{person.name}</TdSecond>
                    </tr>
                    <tr>
                        <TdFirst>User name: </TdFirst>
                        <TdSecond>{person.username}</TdSecond>
                    </tr>
                    <tr>
                        <TdFirst>Phone: </TdFirst>
                        <TdSecond>{person.phone}</TdSecond>
                    </tr>
                    <tr>
                        <TdFirst>Website: </TdFirst>
                        <TdSecond>{person.website}</TdSecond>
                    </tr>
                    </div>
                    )}
            </Table>
        );
    }
}

export default UserInfo;

const Table = styled.table`
position: relative;
left: 130px;
margin: 0 auto;
background-color: hsl(136, 36%, 50%);
width: 50%;
border-collapse: collapse;
`

const TdFirst = styled.td`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
`

const TdSecond = styled.td`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
`