const express = require('express');

const createAccountRoute = require('../routes/users/createAccountRoute');
const loginRoute = require('../routes/users/authRoute');
const createProduct = require('../routes/products/create');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(createAccountRoute);
app.use(loginRoute);
app.use(createProduct);

module.exports = app;
