const express = require('express');
const multer = require('multer');

const addPhotoToAssessments = require('../../controllers/productsAssessments/addPhotoToAssessmentsController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/products/assessment/addPhoto', upload.single('file'), addPhotoToAssessments.addPhoto);

module.exports = router;
