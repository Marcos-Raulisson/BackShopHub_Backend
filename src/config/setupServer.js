const express = require('express');
const session = require('express-session');

const routeAuthentication = require('../routes/authentication');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'root',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 604800000,
  },
}));

app.use(routeAuthentication);

module.exports = app;
