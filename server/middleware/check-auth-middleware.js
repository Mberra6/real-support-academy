require('dotenv').config();
const session = require('express-session');
const jwt = require('jsonwebtoken');



// Create session
exports.createSession = session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true});

// Check if user is authenticated
exports.auth = (req, res, next) => {
    if (req.session.authorization) {
        token = req.session.authorization["accessToken"];
        try {
            const verified = jwt.verify(token, 'access');
            req.user = verified;
            next();
        } catch (error) {
            return res.status(400).json("User not authenticated.");
        }

    } else {
        return res.status(403).send("User not logged in.");
    }
};