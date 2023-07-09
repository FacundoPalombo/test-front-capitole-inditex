const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');

const apiRoutes = require('./controller/index');
const Logger = require('./lib/logger');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static(path.join(__dirname, '../dist/')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const error = createError(err);
  Logger.error(err);
  // return the error
  return res
    .status(error?.status || 500)
    .json({ error: { message: error?.message, status: error?.status } });
});

module.exports = app;
