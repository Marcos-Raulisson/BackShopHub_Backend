const express = require('express');

const verifyTokenMiddleware = require('../../middlewares/verifyToken');

const router = express.Router();

const deleteProductController = require('../../controllers/products/deleteProductController');

router.delete('/products/delete/:id', deleteProductController.delete);

module.exports = router;
