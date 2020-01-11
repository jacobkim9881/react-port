import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        let me = this.props.me;
        let com = this.props.com;
        return (
            <div>
                {`${me} : ${com}`}
                {me === com? "both" : me > com ? "me" : "com"} Win!
            </div>
        );
    }
}

export default Test1;