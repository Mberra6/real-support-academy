const express = require('express');

const checkAuth = require('../middleware/check-auth-middleware');
const userControllers = require('../controllers/users-controllers');

const router = express.Router();



// Login user
router.post('/login', userControllers.userLogin);

// Get user's details
router.post('/account', userControllers.userDetails);



module.exports = router;