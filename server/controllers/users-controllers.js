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

// Function to register new user
exports.userRegister = async (req, res, next) => {
    try {
        let { firstName, lastName, email, password, repeatPassword, username } = req.body;
        if (!firstName || !lastName || !email || !password || !repeatPassword || !username) {
            res.status(403).json({ message: 'Missing parameters! Please fill out all the fields in the form.' });
        } else if (await doesExistEmail(email)) {
            res.status(403).json({ message: 'Email already exists! Please choose a different email' });
        } else if (await doesExistUsername(username)) {
            res.status(403).json({ message: 'Username already exists! Please choose a different username.' });
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

        if (!username || !password) return res.status(403).json({ message: 'Missing email/username or password.' });

        if (await authenticateUserByEmail(email, password)) {
            let accessToken = jwt.sign({
                data: password
            }, 'access', { expiresIn: 60 * 60 });

            req.session.authorization = {
                accessToken, email
            };

            return res.status(201).json({ message: 'User successfully logged in.' });
        } else if (await authenticateUserByUsername(username, password)) {
            let accessToken = jwt.sign({
                data: password
            }, 'access', { expiresIn: 60 * 60 });

            req.session.authorization = {
                accessToken, username
            };

            return res.status(201).json({ message: 'User successfully logged in.' });
        } else {
            return res.status(403).json({ message: 'Invalid login credentials. Check username/email and password.' });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

