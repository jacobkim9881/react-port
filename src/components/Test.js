import React, { Component } from 'react';

import { Main } from '../Css'
import Test1 from './Test1'

class Test extends Component {
    render() {        
        let fruit = "banana"
        return (
            <Main>
                <Test1 test={fruit} />                
            </Main>
        );
    }
}

export default Test;