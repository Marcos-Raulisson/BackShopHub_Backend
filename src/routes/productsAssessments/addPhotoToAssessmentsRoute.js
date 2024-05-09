const express = require('express');
const multer = require('multer');

const addPhotoToAssessments = require('../../controllers/productsAssessments/addPhotoToAssessmentsController');
const verifyToken = require('../../middlewares/verifyToken');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/products/assessment/addPhoto', verifyToken, upload.single('file'), addPhotoToAssessments.addPhoto);

module.exports = router;
