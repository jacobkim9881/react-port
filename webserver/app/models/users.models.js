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