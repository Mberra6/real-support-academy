// vivians comment


const express = require('express');
const jwt = require('jsonwebtoken');
const registered_users = express.Router();

let users = []

// Function to check if username and password pair ecist in the db
const authenticateUser = (username, password) => {
    let validusers = users.filter((user) => {
        return (user.username === username && user.password === password);
    });

    if (validusers.length > 0) {
        return true;
    } else {
        return false;
    }
};

// Login -> Only registered users can login
registered_users.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(403).send("Missing username/password.");
    }

    if (authenticateUser(username, password)) {
        let accessToken = jwt.sign({
            data:password
        }, 'access', {expiresIn: 60 * 60});

        req.session.authorization = {
            accessToken, username
        };

        return res.status(200).send("User successfully logged in.");
    } else {
        return res.status(403).send("Invalid login. Check username and password.")
    }
});

module.exports.authenticated = registered_users;
module.exports.users = users;