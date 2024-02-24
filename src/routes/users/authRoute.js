const express = require('express');

const authController = require('../../controllers/users/authController');

const router = express.Router();

router.post('/users/auth', authController.auth);

module.exports = router;
