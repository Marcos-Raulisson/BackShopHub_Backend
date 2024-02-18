const express = require('express');

const loginController = require('../../controllers/users/loginController');

const router = express.Router();

router.post('/users/login', loginController.login);

module.exports = router;
