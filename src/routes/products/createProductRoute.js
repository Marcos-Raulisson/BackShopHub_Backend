const express = require('express');

const createProduct = require('../../controllers/products/createProductController');

const verifyTokenMiddleware = require('../../middlewares/verifyToken');

const router = express.Router();

router.post('/products/create', createProduct.create);

module.exports = router;
