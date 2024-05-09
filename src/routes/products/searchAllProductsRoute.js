const express = require('express');

const router = express.Router();

const searchAllProductsController = require('../../controllers/products/searchAllProductsController');

router.get('/products', searchAllProductsController.searchAllProducts);

module.exports = router;
