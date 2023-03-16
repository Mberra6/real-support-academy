const express = require('express');
let courses = require('./coursesdb');
let users = require('./auth_users.js').users;
const public_users = express.Router();

// Function to check if username exists in users db
const doesExist = (username) => {
    let usersWithSameName = users.filter((user) => {
        return user.username === username;
    });

    if (usersWithSameName.length > 0) {
        return true;
    } else {
        return false;
    }
};


// Get the list of courses available in the system
public_users.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({courses}, null, 4));
});

// Register user
public_users.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(201).send("Missing username/password.");
    } else if (doesExist(username)) {
        return res.status(202).send("Username already exists.");
    } else {
        users.push({"username": username, "password": password});
        return res.status(200).send("Registration successful. Now you can login.");
    }

});

// Get course by title
public_users.get('/courses/title/:title', (req, res) => {
    const title = req.params.title;
    let keys = Object.keys(courses);
    let record;

    keys.forEach((key) => {
        if (courses[key]["title"] === title) {
            record = Object.assign({CourseNumber: key}, courses[key]);
        }
    });

    if (record) {
        res.status(200).send(JSON.stringify(record, null, 4));
    } else {
        res.status(403).send("No course with such title.");
    }

});

// Get courses by length
public_users.get('/courses/length/:length', (req, res) => {
    const length = req.params.length;
    let keys = Object.keys(courses);
    let record;
    listOfCourses = [];

    keys.forEach((key) => {
        if (courses[key]["length"] === length) {
            record = Object.assign({CourseNumber: key}, courses[key]);
            listofcourses.push(record);
        }
    });

    if (listOfCourses.length > 0) {
        res.status(200).send(JSON.stringify(listofcourses, null, 4));
    } else {
        res.status(403).send("No courses with such length.");
    }
});

module.exports.general = public_users;