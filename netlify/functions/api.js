// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const serverless = require('serverless-http');
const app = require('../../server');

const handler = serverless(app);

module.exports = {
  handler,
};
