// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from 'express';
import serverless from 'serverless-http';
import app from '../../server';

const api = express();

api.use(app);

export const handler = serverless(api);
