const express = require('express');

const createAccountRoute = require('../routes/users/createAccountRoute');
const loginRoute = require('../routes/users/authRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(createAccountRoute);
app.use(loginRoute);

module.exports = app;
