const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const gen_routes = require('./routes/general.js').general;
const reg_routes = require('./routes/auth_users.js').authenticated;
const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());

// Session authentication
app.use('/registered', session({secret: "fingerprint_user", resave: true, saveUninitialized: true}));

app.use('/registered/auth/*', function auth(req, res, next) {
    if (req.session.authorization) {
        token = req.session.authorization["accessToken"];
        jwt.verify(token, 'access', (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).send("User not authenticated.");
            }
        })

    } else {
        return res.status(403).send("User not logged in.");
    }

});






const PORT = 3333;

app.use('/', gen_routes);
app.use('/registered', reg_routes);


// Server listening on Port 3333
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

