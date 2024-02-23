const express = require('express');

const createProduct = require('../../controllers/products/create');

const router = express.Router();

router.post('/products/create', createProduct.create);

module.exports = router;
