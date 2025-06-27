require('dotenv').config();
const jwt = require('jsonwebtoken');



// Check if user is authenticated
exports.auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SESSION_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};

// Explicit endpoint for /api/user/auth
exports.authCheckHandler = (req, res) => {
    const { id, isAdmin } = req.user;
    res.status(200).json({ id, isAdmin });
};