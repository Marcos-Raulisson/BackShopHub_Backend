const express = require('express');

const createAccountRoute = require('../routes/users/createAccountRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(createAccountRoute);

module.exports = app;
