const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const gen_routes = require('./routes/general.js').general;

const app = express();

app.use(express.json());



const PORT = 3333;

app.use('/', gen_routes);

// Server listening on Port 3333
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

