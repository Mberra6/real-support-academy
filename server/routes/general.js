const express = require('express');
let courses = require('./coursesdb');
const public_users = express.Router();


// Get the list of courses available in the system
public_users.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({courses}, null, 4));
});

module.exports.general = public_users;