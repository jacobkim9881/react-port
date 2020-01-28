import React, { Component } from 'react';
import { createStore } from 'redux'

import { Main } from '../Css'
import Test1 from './Test1'

const value = {
    preview: ""
  }
  
  const showEditor = (state = value, action) => {
    switch(action.type) {
        case 'WRITE':
            const newValue = Object.assign({}, value, { preview: action.writing} )
            return newValue.preview
        default:
            return state.preview
    }
  }
  
  const store = createStore(showEditor);
  
  const actionCreate = (writing) => {
    return {
      type: 'WRITE',
      writing
    }
  }
  
  store.dispatch(actionCreate('asdf'));
  
  console.log(store.getState())

class Test extends Component {
    render() {        
        let fruit = "banana"
        return (
            <Main>
                <Test1 test={fruit} />                
                {store.getState()}
            </Main>
        );
    }
}

export default Test;