import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    state = {
        name : ""
    }

    handleLogin(e) {
        e.preventDefault();        
        axios.post('http://localhost:3001/auth', {
            name: this.name.value,
            password: this.password.value
        })
            .then(res => this.setState({
                name: res.data.name
            }))        
    }

    render() {
        return (
            <div>
                <form onClick={this.handleLogin}>
                    <input ref={ref => {this.name = ref}} type="text" placeholder="Put your name" />
                    <input ref={ref => {this.password = ref}} type="password" placeholder="Put your password" />
                    <input type="submit" />
                    {this.state.name === "" ? `Please put your info.` : `Hello, ${this.state.name}!`}
                </form>
            </div>
        );
    }
}

export default Login;