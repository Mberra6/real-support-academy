const express = require('express');

const checkAuth = require('../middleware/check-auth-middleware');
const userControllers = require('../controllers/users-controllers');

const router = express.Router();



// Get user's details
router.get('/account/:userId', checkAuth.auth, userControllers.userDetails);



module.exports = router;