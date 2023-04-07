const express = require('express');

const checkAuth = require('../middleware/check-auth-middleware');
const userControllers = require('../controllers/users-controllers');

const router = express.Router();

// Check if user authorized
router.get('/auth', checkAuth.auth);


// Get user's details
router.get('/account/:userId', userControllers.userDetails);

// Update user's details
router.put('/account/update/:userId', userControllers.userUpdateDetails);



module.exports = router;