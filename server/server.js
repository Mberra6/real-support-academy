const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const gen_routes = require('./routes/general.js').general;
const reg_routes = require('./routes/auth_users.js').authenticated;

const app = express();

app.use(express.json());

app.use('/registered', session({secret: "fingerprint_user", resave: true, saveUninitialized: true}));

const PORT = 3333;

app.use('/', gen_routes);
app.use('/registered', reg_routes);


// Server listening on Port 3333
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

