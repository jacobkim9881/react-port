This github page is a portfolio page from Jacob Kim.

# Portfolio
## Initiate node package manager
* Make directory
`mkdir webserver`
* Go to webserver dir
`cd webserver`
* Make `web.js` file
`vi web.js`
* Prepare node package manager
`npm init -y`
then you can see below

~~~
~/webserver/package.json:

{
  "name": "webserver",
  "version": "1.0.0",
  "description": "",
  "main": "web.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
~~~

* Install required modules
`npm install express express-session mysql body-parser cors`
then you can see below

~~~
+ cors@2.8.5
+ body-parser@1.19.0
+ mysql@2.18.1
+ express-session@1.17.0
+ express@4.17.1
added 67 packages from 51 contributors and audited 185 packages in 2.132s
found 0 vulnerabilities
~~~

* Put some code into web.js

~~~
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParse.urlencoded({ extened: true}));

app.use(session({
    secret: 'secret',
    resave: 'true',
    saveUninitialized: true
}));

app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello!');
});

app.listen(3001, () => {
    console.log("Server is runing at port 3001.")
~~~

* After running then you can see 'Hello!' message on the browser.
`npm start`


## Put code for running node server with mysql
* Make db.config.js at /webserver/app/config 
put below

~~~
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node"
};
~~~

* Make db.js at /webserver/app/models/
put below

~~~
const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

con.connect(err => {
    if (err) throw err;
    console.log('DB is connected.');
});

exports.module = con;
~~~

* Make users.models.js at /webserver/app/models/
put below

~~~
const con = require('./db')


const User = function(user) {
    this.name = user.name;
    this.password = user.password;
}

User.trylogin = (user, result) => {
    if (user) {
        // When name or password isn't matched then 
        if (user.name == "") {
            console.log(`Please enter your name.`)
            result();
        } else if (user.password == "") {
            console.log(`Please enter your password.`)
            result();
        }
        // Need to put right query. If not then error and should check what was the problem by logging error.
        // user is requested name and password. Should check by logging user too when error.
        con.query(`SELECT * FROM users WHERE name = ? AND password = ?`, 
        [user.name, user.password], (err, res) => {
            // res is responsed from db. If query isn't put rightly then you don't get response. 
            // Only you got right response from right query.            
            if (res) {
                console.log(`name : ${res[0].name} logged in.`);
                // When you want just one row from query then you should put res[0].
                result(null, res[0]);
            } else if (err) {
                console.log(`Error occured : ${err}.`);
                result(err, null);
                // You will waiting endlessly 
                //when you didn't put null response(result(err, null)) when 'if(!res)'
            } else {
                console.log(`Log in failed. Try again!`);
                result(err, null);
            };
        });
    }
}

module.exports = User;
~~~

* Make users.controllers.js at /webserver/app/controllers
put below

~~~
const User = require('../models/users.models')

exports.loginon = (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    });

    User.trylogin(user, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        if (data) {
            req.session.loggedin = true;
            req.session.name = req.body.name;
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        } else {
            //Watining endlessly if not finishing res when no data.
            res.send('Name or password is incorrect.');
        }
    });
}
~~~

* Make users.routes.js at /webserver/app/routes
put below

~~~
module.exports = app => {
    const user = require('../controllers/users.controllers')

    app.post('/auth', user.loginon);    
}
~~~

* Put a row below at line 23 of web.js file at /webserver
`require('./app/routes/users.routes')(app);`

## Add queries to connect node server
* Now put some queries at mysql

~~~
CREATE DATABASE node;

use node

// Message
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
~~~

~~~
CREATE TABLE users
(id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, 
name varchar(50) NOT NULL, 
password varchar(50) NOT NULL);

// Message
Query OK, 0 rows affected (0.07 sec)
~~~

~~~
INSERT INTO users VALUES
(1, "test", "test");

// Message
Query OK, 1 rows affected (0.07 sec)
~~~

* Check if you want to see rows

`SELECT * FROM users;`

then

~~~
+----+------+----------+
| id | name | password |
+----+------+----------+
|  1 | test | test     |
+----+------+----------+
1 row in set (0.00 sec)
~~~

## Http request application: Postman
* Try request at Postman
* Download Postman here :

https://www.postman.com/

Reference here :

https://www.guru99.com/postman-tutorial.html

* Try post request at your 'localhost:3001/auth/' by putting 

~~~
{
	"name": "test",
	"password": "test"
}
~~~

* Your web server is ready to request post.

## Login page at React

* Make login form first,

~~~
<form onClick={this.handleLogin}>
    <input ref={ref => {this.name = ref}} type="teplaceholder="Put your name" />
    <input ref={ref => {this.password = ref}} type="passwoplaceholder="Put your password" />
    <input type="submit" />
    {this.state.name === "" ? `Please put your info.` : `He ${this.state.name}!`}
</form>
~~~

* When you put a name and a password into input your information will be saved at `ref` temporarily.
* And after submit then handleLogin function will started.
* Write handleLogin function

~~~
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
~~~

* When clicked submit buttion, references(a name and password) will be sent to webserver by requesting post.
* After authentication and request is finished, server response with data.
* Data is set at name state.

* This is finished below,

~~~
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
~~~

* Run React by `npm start` and see login form at your browser.