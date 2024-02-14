const express = require('express');

const users = require('../routes/users/users');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(users);

module.exports = app;
