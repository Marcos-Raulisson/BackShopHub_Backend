const express = require('express');
const multer = require('multer');

const createProduct = require('../../controllers/products/createProductController');

const verifyAuthorization = require('../../middlewares/verifyAuthorizarion');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/products/create', verifyAuthorization, upload.single('file'), createProduct.create);

module.exports = router;
