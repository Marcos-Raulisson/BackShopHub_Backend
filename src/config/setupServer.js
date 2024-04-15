const express = require('express');

const createAccountRoute = require('../routes/users/createAccountRoute');
const loginRoute = require('../routes/users/authRoute');
const renewTokenRoute = require('../routes/renewTokenRoute');
const createProductRoute = require('../routes/products/createProductRoute');
const updateProductRoute = require('../routes/products/updateProductRoute');
const deleteProductRoute = require('../routes/products/deleteProductRoute');
const searchAllProductsRoute = require('../routes/products/searchAllProductsRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(createAccountRoute);
app.use(loginRoute);
app.use(renewTokenRoute);
app.use(createProductRoute);
app.use(updateProductRoute);
app.use(deleteProductRoute);
app.use(searchAllProductsRoute);

module.exports = app;
