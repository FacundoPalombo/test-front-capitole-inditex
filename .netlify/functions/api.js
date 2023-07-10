// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require('express');
const serverless = require('serverless-http');
const app = require('../../server');

const api = express();

api.use(app);

const handler = serverless(api);

module.exports = { handler };
