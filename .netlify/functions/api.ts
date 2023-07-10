// YOUR_BASE_DIRECTORY/netlify/functions/api.js
import serverless from 'serverless-http';
import app from '../../server';

export const handler = serverless(app);
