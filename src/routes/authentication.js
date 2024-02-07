const express = require('express');

const authenticationController = require('../controllers/authenticationController');

const router = express.Router();

router.post('/api/authentication', authenticationController.auth);

module.exports = router;
