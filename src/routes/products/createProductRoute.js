const express = require('express');
const multer = require('multer');

const createProduct = require('../../controllers/products/createProductController');

const verifyTokenMiddleware = require('../../middlewares/verifyToken');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/products/create', upload.single('file'), createProduct.create);

module.exports = router;
