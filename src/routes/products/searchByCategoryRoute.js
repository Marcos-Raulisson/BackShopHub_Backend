const express = require('express');

const router = express.Router();

const searchByCategoryController = require('../../controllers/products/searchByCategoryController');

router.get('/products/:category', searchByCategoryController.searchByCategory);

module.exports = router;
