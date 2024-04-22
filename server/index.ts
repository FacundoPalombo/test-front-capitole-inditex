import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import createError from 'http-errors';
import path from 'path';
import logger from 'morgan';
import apiRoutes from './controller/index';
import Logger from './lib/logger';
import { cacheInterceptor } from './middlewares/cache';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cacheInterceptor);

app.use(express.static(path.resolve('dist')));

app.use('/api/', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const error = createError(err);
  Logger.error(err);
  // return the error
  return res
    .status(error?.status || 500)
    .json({ error: { message: error?.message, status: error?.status } });
});

module.exports = app;
