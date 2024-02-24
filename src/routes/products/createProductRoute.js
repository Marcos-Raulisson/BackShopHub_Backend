const express = require('express');

const createProduct = require('../../controllers/products/create');

const verifyTokenMiddleware = require('../../middlewares/verifyToken');

const router = express.Router();

router.post('/products/create', verifyTokenMiddleware, createProduct.create);

module.exports = router;
