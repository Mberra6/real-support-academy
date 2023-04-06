require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');



// Function to check if passwords match
const checkPasswords = (passwordOne, passwordTwo) => {
    if (passwordOne === passwordTwo) return true;
    return false;
};

// Function to check if username exists in db
const doesExistUsername = async (username) => {
    try {
        let [user, _] = await User.findByUsername(username);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if email exists in db
const doesExistEmail = async (email) => {
    try {
        let [user, _] = await User.findByEmail(email);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if username and password pair exist in the db
const authenticateUserByUsername = async (username, password) => {
    try {
        let [user, _] = await User.findByUsername(username.toLowerCase());
        if (user.length > 0) return user[0].password === password;
        return false;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if email and password pair exist in the db
const authenticateUserByEmail = async (email, password) => {
    try {
        let [user, _] = await User.findByEmail(email);
        if (user.length > 0) return user[0].password === password;
        return false;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// function to create json web token
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username}, process.env.SESSION_SECRET, { expiresIn: "3600s" });
};

// Function to get user id by email
const getIdByEmail = async (email) => {
    try {
        let [user, _] = await User.getIdByEmail(email);
        return user[0].user_id;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to get user id by username
const getIdByUsername = async (username) => {
    try {
        let [user, _] = await User.getIdByUsername(username);
        return user[0].user_id;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to register new user
exports.userRegister = async (req, res, next) => {
    try {
        let { firstName, lastName, email, password, repeatPassword, username } = req.body;
        
        if (await doesExistEmail(email)) {
            res.status(403).json({ message: 'Email already exists! Please choose a different email' });
        } else if (await doesExistUsername(username)) {
            res.status(403).json({ message: 'Username already exists!' });
        } else if (password.length < 8) {
            res.status(403).json({ message: "Password must be at least 8 characters long!" });
        } else if (!checkPasswords(password, repeatPassword)) {
            res.status(403).json({ message: "Passwords do not match!" });
        } else {
            let user = new User(firstName, lastName, email, password, username.toLowerCase());
            user = await user.save();
            res.status(201).json({ message: 'Registration successful. You can now login.'});
        }
        
    } catch (error) {
        console.log(error);
        next(error);
    }
};

 // Function to login user
 exports.userLogin = async (req, res, next) => {
    try {
        let { email, username, password } = req.body;

        if (await authenticateUserByEmail(email, password)) {
            let [user, _] = await User.findByEmail(email);
            const accessToken = generateAccessToken(user[0]);

            return res.status(201).json({
                id: user[0].user_id,
                accessToken
            });
        } else if (await authenticateUserByUsername(username, password)) {
            let [user, _] = await User.findByUsername(username);
            const accessToken = generateAccessToken(user[0]);

            return res.status(201).json({
                id: user[0].user_id,
                accessToken
            });
        } else {
            return res.status(403).json({ message: 'Invalid authentication. Check your credentials.' });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to get user details
exports.userDetails = async (req, res, next) => {
    try {
        let id = req.params.userId;
        let [user, _] = await User.findById(id);

        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

