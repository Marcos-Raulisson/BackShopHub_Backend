const express = require('express');

const createAccountRoute = require('../routes/users/createAccountRoute');
const loginRoute = require('../routes/users/authRoute');
const createProductRoute = require('../routes/products/createProductRoute');
const updateProductRoute = require('../routes/products/updateProductRoute');
const renewTokenRoute = require('../routes/renewTokenRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(createAccountRoute);
app.use(loginRoute);
app.use(createProductRoute);
app.use(updateProductRoute);
app.use(renewTokenRoute);

module.exports = app;
