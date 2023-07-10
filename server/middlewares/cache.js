const Cache = require('node-cache');
const Logger = require('../lib/logger');

const cache = new Cache({ stdTTL: 100 });

const cacheInterceptor = (req, res, next) => {
  const cacheKey = `${req.method}-${req.path}-${JSON.stringify(req.params)}`;
  const cachedResource = cache.get(cacheKey);
  res.locals.cacheKey = cacheKey;
  console.log();
  if (cachedResource === undefined) {
    res.locals.cached = false;
    return next();
  }
  res.locals.cached = true;
  Logger.info(cacheKey);
  return res.json(cachedResource).status(304);
};

const cacheLoader = (req, res, next) => {
  if (!res.locals.cached) {
    if (typeof res.locals.data === 'undefined') {
      const error = new Error(
        'Should not load data from cache, no data is provided.'
      );
      return next(error);
    }
    if (typeof res.locals.cacheKey === 'undefined') {
      const error = new Error(
        'Should not load data from cache, no cacheKey found in controllers.'
      );
      return next(error);
    }
    cache.set(res.locals.cacheKey, res.locals.data, 8600000);
  }
  return next();
};

module.exports = { cacheInterceptor, cacheLoader };
