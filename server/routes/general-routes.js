const express = require('express');

const checkAuth = require('../middleware/check-auth-middleware');
const userControllers = require('../controllers/users-controllers');

const router = express.Router();



// Register user
router.post('/register', userControllers.userRegister);

// Login user
router.post('/login', checkAuth.createSession, userControllers.userLogin);



module.exports = router;