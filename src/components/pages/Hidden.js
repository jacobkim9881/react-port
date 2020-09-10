import React, { Component } from 'react';
import { Main } from '../../Css'

class Hidden extends Component {
    render() {
        return (
            <Main>
                This is hidden page.<br/>
                Ideas for new portfolio : <br/>
                    Updating json files(reference: <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection">Basic JavaScript: Record CollectionPassed</a>)
                    <br/>
                    Profile Lookup(reference: <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup">Basic JavaScript: Profile Lookup</a>)
            </Main>
        );
    }
}

export default Hidden;