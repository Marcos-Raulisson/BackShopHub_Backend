const express = require('express');

const router = express.Router();

const createAssessmentsController = require('../../controllers/productsAssessments/createAssessmentsController');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/products/assessment', verifyToken, createAssessmentsController.assessment);

module.exports = router;
