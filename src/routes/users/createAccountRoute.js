const express = require('express');

const createAccountController = require('../../controllers/users/createAccountController');

const router = express.Router();

router.post('/users/create-account', createAccountController.createAccount);

module.exports = router;
