import React, { Component } from 'react';
import { Main } from '../Css'
import Toggle from './utilities/Toggle'
import Test1 from './Test1'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggledOn: false,
            ranNum: "",
            otherRanNum: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.saveNumber = this.saveNumber.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isToggledOn: !state.isToggledOn
        }));
    }
    
    saveNumber() {
        this.setState({
            ranNum: Math.trunc(
                Math.random()*7
            ),
            otherRanNum: Math.trunc(
                Math.random()*7
            )
        });
    }
    
    render() {
        let me = this.state.ranNum;
        let com = this.state.otherRanNum;
        return (
            <Main>
                <Toggle name={"Click me"}/>
                <button onClick={this.handleClick}>Click me</button> 
                {this.state.isToggledOn? "on" : "off"}
                <button onClick={this.saveNumber}>getRanNum</button>
                {<Test1 me={me} com={com} />}    
            </Main>
        );
    }
}

export default Test;