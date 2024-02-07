const express = require('express');

const routeAuthentication = require('../routes/authentication');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routeAuthentication);

module.exports = app;
