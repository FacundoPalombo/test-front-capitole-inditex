const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const apiRoutes = require('./routes/index');
const Logger = require('./lib/logger');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(express.static(path.join(__dirname, '../dist/')));
app.use('/api', apiRoutes);

// error handler
app.use(function (err, req, res) {
  Logger.error(err);
  // return the error
  res
    .status(err.status || 500)
    .json({ error: { message: err.message, status: err.status } });
});

module.exports = app;
