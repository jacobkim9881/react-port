module.exports = app => {
    const user = require('../controllers/users.controllers')

    app.post('/auth', user.loginon);    
}