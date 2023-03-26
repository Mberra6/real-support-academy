const User = require('../models/user');
const jwt = require('jsonwebtoken');



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
        let [user, _] = await User.findByUsername(username);
        if (user.length > 0) return user.password === password;
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
        let { firstName, lastName, email, password, username } = req.body;
        if (!firstName || !lastName || !email || !password || !username) {
            res.status(403).json({ message: 'Missing parameters!' });
        } else if (await doesExistUsername(username)) {
            res.status(403).json({ message: 'Username already exists. Please choose a different username.' });
        } else if (await doesExistEmail(email)) {
            res.status(403).json({ message: 'Email already exists!' });
        } else {
            let user = new User(firstName, lastName, email, password, username);
            user = await user.save();
            res.status(201).json({ message: 'User successfully registered. '});
        }
        
    } catch (error) {
        console.log(error);
        next(error);
    }
};

 // Function to login user
 exports.userLogin = async (req, res, next) => {
    try {
        let { username, password } = req.body;
        if (!username) {
            let { email, password } = req.body;

            if (!email || !password) return res.status(403).json({ message: 'Missing email/username or password.' });

            if (await authenticateUserByEmail(email, password)) {
                let accessToken = jwt.sign({
                    data: password
                }, 'access', { expiresIn: 60 * 60 });

                req.session.authorization = {
                    accessToken, email
                };

                return res.status(201).json({ message: 'User successfully logged in.' });
            } else {
                return res.status(403).json({ message: 'Invalid login credentials. Check email and password.' });
            }
            
        } else {
            if (!password) return res.status(403).json({ message: 'Missing email/username or password.' });

            if (await authenticateUserByUsername(username, password)) {
                let accessToken = jwt.sign({
                    data: password
                }, 'access', { expiresIn: 60 * 60 });

                req.session.authorization = {
                    accessToken, username
                };

                return res.status(201).json({ message: 'User successfully logged in.' });
            } else {
                return res.status(403).json({ message: 'Invalid login credentials. Check username and password.' });
            }
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

