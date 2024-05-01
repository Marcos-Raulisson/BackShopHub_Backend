const express = require('express');

const router = express.Router();

const createAssessmentsController = require('../../controllers/productsAssessments/createAssessmentController');

router.post('/products/assessment', createAssessmentsController.assessment);

module.exports = router;
