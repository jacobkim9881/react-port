const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    secret: 'secret',
    resave: 'true',
    saveUninitialized: true
}));

app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello!');
});

require('./app/routes/users.routes')(app);

app.listen(3001, () => {
    console.log("Server is runing at port 3001.")
});