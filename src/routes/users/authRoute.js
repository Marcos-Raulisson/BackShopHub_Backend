const express = require('express');

const authController = require('../../controllers/users/AuthController');

const router = express.Router();

router.post('/users/login', authController.login);

module.exports = router;
