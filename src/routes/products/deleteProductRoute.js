const express = require('express');

const verifyAuthorization = require('../../middlewares/verifyAuthorizarion');

const router = express.Router();

const deleteProductController = require('../../controllers/products/deleteProductController');

router.delete('/products/delete/:id', verifyAuthorization, deleteProductController.delete);

module.exports = router;
