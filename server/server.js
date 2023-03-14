const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const gen_routes = require('./routes/general.js').general;

const app = express();

app.use(express.json());



const PORT = 5000;

app.use('/', gen_routes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

