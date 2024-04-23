import Cache from 'node-cache';
import Logger from '../lib/logger';
import { Request, Response, NextFunction } from 'express';

const cache = new Cache({ stdTTL: 100 });

export type CacheKey = `[${string}]${string}`;

export const cacheInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const cacheKey: CacheKey = `[${req.method}]${req.path}`;
  const cachedResource = cache.get(cacheKey);
  res.locals.cacheKey = cacheKey;
  if (cachedResource === undefined) {
    res.locals.cached = false;
    next();
    return;
  }
  res.locals.cached = true;
  res.status(201).json(cachedResource);
};

export const cacheLoader = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!res.locals.cached) {
    if (typeof res.locals.data === 'undefined') {
      const error = new Error(
        'Should not load data from cache, no data is provided.'
      );
      next(error);
      return;
    }
    if (typeof res.locals.cacheKey === 'undefined') {
      const error = new Error(
        'Should not load data from cache, no cacheKey found in controllers.'
      );
      next(error);
      return;
    }
    Logger.info(`New resource Cached: [Key:${res.locals.cacheKey}]`);
    cache.set(res.locals.cacheKey, res.locals.data, 100);
  }
  next();
};
