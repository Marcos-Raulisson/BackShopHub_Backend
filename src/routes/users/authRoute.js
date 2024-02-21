const express = require('express');

const authController = require('../../controllers/users/loginController');

const router = express.Router();

router.post('/users/login', authController.login);

module.exports = router;
