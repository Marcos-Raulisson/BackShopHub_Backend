const express = require('express');

const router = express.Router();

const productAssessmentController = require('../../controllers/products/productAssessmentController');

router.post('/products/assessment', productAssessmentController.toAssess);

module.exports = router;
