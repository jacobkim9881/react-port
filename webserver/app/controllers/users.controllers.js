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