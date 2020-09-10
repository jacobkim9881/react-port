import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggledOn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isToggledOn: !state.isToggledOn
        }));
    }
    render() {
        return (
                <div>
                <button onClick={this.handleClick}>{this.props.name}</button>
                {this.state.isToggledOn? "On": "Off"}
                </div>
        );
    }
}

export default Toggle;